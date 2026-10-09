import React from 'react';

export const TechLogo: React.FC<{ type: string; className?: string }> = ({
  type,
  className = "w-7 h-7 sm:w-8 sm:h-8",
}) => {
  switch (type) {
    case 'html':
      return (
        <svg viewBox="0 0 28 32" className={className} fill="none">
          {/* Red Shield */}
          <path d="M3 2H25L23 25.5L14 28.5L5 25.5L3 2Z" fill="#E41F26" />
          <path d="M14 3.8V26.5L21.4 24L23.1 3.8H14Z" fill="#C4151C" />
          {/* Black Stylized 5 */}
          <path
            d="M7.2 6.8H20.8V10H10.7L11.1 13.4H20.5L19.6 21.2L14 22.8L8.4 21.2L8 17.6H11.3L11.5 19.3L14 20L16.5 19.3L16.8 16.2H7.5L7.2 6.8Z"
            fill="#0E0F12"
          />
        </svg>
      );

    case 'css':
      return (
        <svg viewBox="0 0 28 32" className={className} fill="none">
          {/* Blue Shield */}
          <path d="M3 2H25L23 25.5L14 28.5L5 25.5L3 2Z" fill="#0082E6" />
          <path d="M14 3.8V26.5L21.4 24L23.1 3.8H14Z" fill="#006AB8" />
          {/* Black Stylized 5 */}
          <path
            d="M7.2 6.8H20.8V10H10.7L11.1 13.4H20.5L19.6 21.2L14 22.8L8.4 21.2L8 17.6H11.3L11.5 19.3L14 20L16.5 19.3L16.8 16.2H7.5L7.2 6.8Z"
            fill="#0E0F12"
          />
        </svg>
      );

    case 'js':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          {/* White badge with rounded corners & cut bottom-right */}
          <path
            d="M6 3H26C27.65 3 29 4.35 29 6V22.5L23.5 28.5H6C4.35 28.5 3 27.15 3 25.5V6C3 4.35 4.35 3 6 3Z"
            fill="#FFFFFF"
          />
          {/* "Js" in black */}
          <g fill="#0E0F12">
            <path d="M11 11.5H14.2V20.2C14.2 21.7 13.3 22.8 11.8 22.8C10.5 22.8 9.5 22 9.1 20.8L11.1 19.7C11.3 20.3 11.6 20.7 12 20.7C12.4 20.7 12.6 20.4 12.6 19.9V11.5H11Z" />
            <path d="M21 14.8C20.4 14.1 19.5 13.8 18.5 13.8C17 13.8 16 14.6 16 15.8C16 17 16.9 17.6 18.2 18C19.6 18.4 20.4 19 20.4 20.1C20.4 21.5 19.2 22.7 17.4 22.7C15.9 22.7 14.8 21.9 14.3 20.7L16.1 19.6C16.4 20.4 17 20.9 17.7 20.9C18.3 20.9 18.8 20.5 18.8 20C18.8 19.5 18.3 19.1 17.2 18.7C15.8 18.2 14.5 17.5 14.5 15.9C14.5 14.4 15.6 13.2 17.3 13.2C18.5 13.2 19.5 13.7 20.1 14.5L21 14.8Z" />
          </g>
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 36 24" className={className} fill="none">
          {/* Black oval with white stroke */}
          <ellipse cx="18" cy="12" rx="16" ry="10" fill="#0C0D10" stroke="#FFFFFF" strokeWidth="1.8" />
          {/* "php" bold lowercase white text */}
          <g fill="#FFFFFF">
            <path d="M8.5 7H11.8C13.2 7 14.2 7.8 14.2 9.3C14.2 10.8 13.2 11.6 11.8 11.6H10.1V16.5H8.5V7ZM10.1 10.2H11.7C12.3 10.2 12.6 9.8 12.6 9.3C12.6 8.8 12.3 8.4 11.7 8.4H10.1V10.2Z" />
            <path d="M15.5 7H17.1V9.5C17.6 8.8 18.4 8.5 19.4 8.5C20.8 8.5 21.6 9.4 21.6 10.8V16.5H20V11.2C20 10.3 19.5 9.8 18.6 9.8C17.7 9.8 17.1 10.4 17.1 11.4V16.5H15.5V7Z" />
            <path d="M23 7H26.3C27.7 7 28.7 7.8 28.7 9.3C28.7 10.8 27.7 11.6 26.3 11.6H24.6V16.5H23V7ZM24.6 10.2H26.2C26.8 10.2 27.1 9.8 27.1 9.3C27.1 8.8 26.8 8.4 26.2 8.4H24.6V10.2Z" />
          </g>
        </svg>
      );

    case 'shopify':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          {/* Shopify bag */}
          <path
            d="M23 7.5L21.2 4.2C21 3.8 20.6 3.5 20.1 3.5H11.9C11.4 3.5 11 3.8 10.8 4.2L9 7.5H5C4.2 7.5 3.5 8.2 3.5 9L6 27.5C6.1 28.3 6.8 29 7.6 29H24.4C25.2 29 25.9 28.3 26 27.5L28.5 9C28.5 8.2 27.8 7.5 27 7.5H23Z"
            fill="#95BF47"
          />
          {/* Fold / shadow */}
          <path d="M16 3.5H20.1C20.6 3.5 21 3.8 21.2 4.2L23 7.5H16V3.5Z" fill="#7AB55C" />
          {/* Handle */}
          <path
            d="M12.5 7.5V5.5C12.5 4.4 13.4 3.5 14.5 3.5H17.5C18.6 3.5 19.5 4.4 19.5 5.5V7.5"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* White 'S' */}
          <path
            d="M17.5 13.8C16.2 13.5 14.8 14 14.8 15.2C14.8 16.5 17.8 16.8 17.8 19.2C17.8 21 16.2 22 14.5 22C12.8 22 11.8 21.1 11.5 19.8L13.4 19.3C13.6 20.1 14 20.5 14.6 20.5C15.2 20.5 15.8 20.1 15.8 19.4C15.8 18 12.8 17.8 12.8 15.4C12.8 13.5 14.4 12.5 16 12.5C17.3 12.5 18.3 13.1 18.7 14.2L17.5 13.8Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'stitch':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          {/* Circular badge */}
          <circle cx="16" cy="16" r="14" fill="#0C0D10" stroke="#38BDF8" strokeWidth="1.6" />
          {/* Interlocking stitch thread/loops */}
          <path
            d="M11 11C11 8.5 13 6.8 16 6.8C19.5 6.8 21 8.8 21 11.5C21 15 11 14.5 11 18.5C11 21.2 12.5 23.2 16 23.2C19.5 23.2 21 21.2 21 18.8"
            stroke="#38BDF8"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Connection endpoints */}
          <circle cx="11" cy="11" r="2.2" fill="#FFFFFF" />
          <circle cx="21" cy="18.8" r="2.2" fill="#FFFFFF" />
          <circle cx="16" cy="15" r="1.5" fill="#38BDF8" />
        </svg>
      );

    case 'google-calendar':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          {/* Background */}
          <rect x="4" y="4" width="24" height="24" rx="4" fill="#FFFFFF" />
          {/* Top Blue Bar */}
          <path d="M4 8C4 5.79 5.79 4 8 4H24C26.21 4 28 5.79 28 8V11H4V8Z" fill="#4285F4" />
          {/* Right Green */}
          <path d="M28 8V24C28 26.21 26.21 28 24 28H23V11H28V8Z" fill="#34A853" />
          {/* Bottom Yellow */}
          <path d="M24 28H8C5.79 28 4 26.21 4 24H24V28Z" fill="#FBBC05" />
          {/* Left Red */}
          <path d="M4 8V24H8V11H4V8Z" fill="#EA4335" />
          {/* Center 31 in Blue */}
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fill="#1A73E8"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="bold"
            fontSize="10"
          >
            31
          </text>
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 24 34" className={className} fill="none">
          <path d="M2 5C2 2.24 4.24 0 7 0H12V10H7C4.24 10 2 7.76 2 5Z" fill="#9DA5B2" />
          <path d="M12 0H17C19.76 0 22 2.24 22 5C22 7.76 19.76 10 17 10H12V0Z" fill="#FFFFFF" />
          <path d="M2 15C2 12.24 4.24 10 7 10H12V20H7C4.24 20 2 17.76 2 15Z" fill="#CCD3DE" />
          <path d="M22 15C22 17.76 19.76 20 17 20C14.24 20 12 17.76 12 15C12 12.24 14.24 10 17 10C19.76 10 22 12.24 22 15Z" fill="#525866" />
          <path d="M7 30C9.76 30 12 27.76 12 25V20H7C4.24 20 2 22.24 2 25C2 27.76 4.24 30 7 30Z" fill="#3C424E" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="16" y="2" width="19.5" height="19.5" rx="3.5" transform="rotate(45 16 2)" fill="#DCE3EB" />
          <path
            d="M21.5 12.2L15.8 6.5C15.3 6 14.4 6 13.9 6.5L12.5 7.9L14.2 9.6C14.7 9.4 15.4 9.5 15.9 10C16.4 10.5 16.6 11.2 16.4 11.8L18.2 13.6C18.8 13.4 19.5 13.6 20 14.1C20.7 14.8 20.7 15.8 20 16.5C19.3 17.2 18.3 17.2 17.6 16.5C17.1 16 16.9 15.2 17.1 14.6L15.4 12.9V17.5C15.6 17.8 15.7 18.2 15.7 18.6C15.7 19.6 14.9 20.4 13.9 20.4C12.9 20.4 12.1 19.6 12.1 18.6C12.1 17.9 12.5 17.3 13.1 16.9V12.4C12.5 12 12.1 11.4 12.1 10.7C12.1 10.3 12.2 9.9 12.5 9.6L11 8.1L7.5 11.6C7 12.1 7 13 7.5 13.5L13.2 19.2C13.7 19.7 14.6 19.7 15.1 19.2L21.5 12.8C22 12.6 22 12.4 21.5 12.2Z"
            fill="#1B2028"
          />
        </svg>
      );

    case 'wordpress':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="14" fill="#0C0D10" stroke="#FFFFFF" strokeWidth="1.8" />
          <path
            d="M6 16C6 19.9 8.4 23.3 11.8 24.8L7.8 13.6C6.6 14.3 6 15.1 6 16ZM22.5 15.3C22.5 13.7 21.9 12.6 21.3 11.6C20.6 10.4 20 9.4 20 8.3C20 6.9 21 6.1 22.2 6.1C21.6 5.8 20.9 5.6 20.1 5.6C18.1 5.6 16.3 6.4 14.9 7.7L18.8 19.2L22.5 15.3ZM16 6.8C16.3 6.8 16.5 6.8 16.8 6.9L11.8 21.4C9.1 19.6 7.4 16.6 7.4 13.2C7.4 9.7 10.2 6.8 16 6.8ZM16 25.2C15.4 25.2 14.9 25.1 14.3 25L18.4 12.8C19 14.6 20 17.2 20 18.8C20 22.2 18.3 25.2 16 25.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M10 6V26" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 6H13.5L10 9.5" fill="#FFFFFF" />
          <path d="M10 7C14.5 9 22 13.5 22.5 23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8.5 23C13 21 17.5 25.5 23 23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};

