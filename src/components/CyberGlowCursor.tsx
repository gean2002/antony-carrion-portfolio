import React, { useEffect, useState } from 'react';

/**
 * Animated subtle glowing cursor for desktop pointers.
 * Automatically disabled on touch screens and reduced motion.
 */
export const CyberGlowCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (mouse)
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('button, a, input, select, textarea, [role="button"]');
      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const loop = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer ambient red haze */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
          isPointer
            ? 'w-16 h-16 bg-red-600/20 blur-md scale-125'
            : 'w-10 h-10 bg-red-600/10 blur-sm scale-100'
        }`}
      />
      {/* Core bright laser dot */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isPointer
            ? 'w-2 h-2 bg-red-400 shadow-[0_0_12px_rgba(239,68,68,1)]'
            : 'w-1.5 h-1.5 bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.7)]'
        }`}
      />
    </div>
  );
};
