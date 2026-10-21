import React, { useEffect, useRef } from 'react';

/**
 * Scroll effects host:
 * - renders the scroll progress bar
 * - provides JS fallbacks ONLY for browsers lacking CSS scroll-driven animations
 *   (in supporting browsers everything runs natively in CSS, off the main thread)
 * - does nothing at all when the user prefers reduced motion
 */
export const ScrollEffects: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof CSS === 'undefined' || !CSS.supports) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cleanups: Array<() => void> = [];

    // --- Choreographed "Wow" section observer (triggers on load & every scroll down) ---
    const docRoot = document.documentElement;
    docRoot.classList.add('wow-ready');

    const wowObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-inview');
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.85) {
            // Reset when scrolled back above the element so scrolling down replays the transition
            el.classList.remove('is-inview');
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
    );

    const wowElements = document.querySelectorAll('[data-wow]');
    // Small timeout so initial page refresh visibly plays the transition
    const timerId = window.setTimeout(() => {
      wowElements.forEach((el) => wowObserver.observe(el));
    }, 80);

    cleanups.push(() => {
      window.clearTimeout(timerId);
      wowObserver.disconnect();
      docRoot.classList.remove('wow-ready');
    });

    // --- Reveal-on-scroll fallback (IntersectionObserver) -------------------
    const supportsView = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
    if (!supportsView) {
      const root = document.documentElement;
      root.classList.add('reveal-fallback');

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );

      document
        .querySelectorAll('.reveal, .reveal-media, .reveal-group > *')
        .forEach((el) => observer.observe(el));

      cleanups.push(() => {
        observer.disconnect();
        root.classList.remove('reveal-fallback');
      });
    }

    // --- Scroll progress bar fallback (scroll listener, rAF-throttled) ------
    const supportsScroll = CSS.supports('animation-timeline', 'scroll()');
    const bar = barRef.current;
    if (!supportsScroll && bar) {
      let ticking = false;
      const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
        bar.style.transform = `scaleX(${ratio})`;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      update();
      cleanups.push(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // Purely decorative: hidden from assistive technology
  return (
    <>
      <div className="intro-curtain" aria-hidden="true">
        <div className="intro-laser" />
      </div>
      <div ref={barRef} className="scroll-progress" aria-hidden="true" />
    </>
  );
};
