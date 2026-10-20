import React from 'react';

interface HighlightProps {
  text: string;
  phrases: string[];
  className?: string;
}

/**
 * Safe React highlighter that replaces `dangerouslySetInnerHTML` (zero XSS surface).
 * Splits `text` on any matching phrase and wraps matches in a styled <span>.
 */
export const Highlight: React.FC<HighlightProps> = ({ text, phrases, className = 'text-white font-semibold' }) => {
  const escaped = phrases
    .filter(Boolean)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (escaped.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, idx) =>
        phrases.includes(part) ? (
          <span key={idx} className={className}>
            {part}
          </span>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        )
      )}
    </>
  );
};
