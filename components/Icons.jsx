import React from 'react';

// Social & General Icons
export const Github = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Linkedin = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Instagram = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Whatsapp = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Tech Skill Icons
export const ReactIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="0" cy="0" r="2" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NextjsIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M16 16L9 7.5V15.5" />
    <path d="M15.5 7.5v5.5" />
  </svg>
);

export const JavascriptIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M15 15a2.5 2.5 0 0 0 2.5-2.5V8" />
    <path d="M7 14c0 1 1 1.5 2 1.5s2-.5 2-1.5v-4" />
  </svg>
);

export const TypescriptIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 8h4m-2 0v7" />
    <path d="M15 15c0 1 1 1.5 2 1.5s2-.5 2-1.5v-3.5c0-1-1-1.5-2-1.5s-2 .5-2 1.5" />
  </svg>
);

export const NodejsIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" />
    <path d="M12 12L3 7" />
    <path d="M12 12l9-5" />
    <path d="M12 12v10" />
    <path d="M12 7.5L7.5 10m4.5 5l4.5-2.5" />
  </svg>
);

export const ExpressjsIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 8l4 8M11 8l-4 8" />
    <path d="M17 12h-4a2 2 0 0 0 0 4h4" />
    <path d="M13 12a2 2 0 0 1 4 0" />
  </svg>
);

export const MongodbIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c0 0-5 4.5-5 9.5S9.5 19 12 22c2.5-3 5-7.5 5-10.5S12 2 12 2z" />
    <path d="M12 2v20" />
  </svg>
);

export const ReduxIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const TailwindIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 6c-3.182 0-5.182 1.59-6 4.773 1.182-1.59 2.545-2.227 4.091-1.91 1.091.224 1.892 1.053 2.764 1.956C14.28 12.273 15.932 14 19.09 14c3.182 0 5.182-1.59 6-4.773-1.182 1.59-2.545 2.227-4.091 1.91-1.091-.224-1.892-1.053-2.764-1.956C16.81 7.727 15.159 6 12 6zm-7 8c-3.182 0-5.182 1.59-6 4.773 1.182-1.59 2.545-2.227 4.091-1.91 1.091.224 1.892 1.053 2.764 1.956C7.28 20.273 8.932 22 12.09 22c3.182 0 5.182-1.59 6-4.773-1.182 1.59-2.545 2.227-4.091 1.91-1.091-.224-1.892-1.053-2.764-1.956C9.81 15.727 8.159 14 5 14z" />
  </svg>
);

export const BootstrapIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M9 16V8h3.5a2 2 0 0 1 0 4 2 2 0 0 1 0 4H9z" />
    <path d="M12.5 12H9" />
  </svg>
);

export const FramerMotionIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 2h16L12 10zM12 10l8 8H4zM4 18h16l-8 4z" />
  </svg>
);

export const GsapIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const RestApiIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const WebsocketsIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 11l4-4-4-4" />
    <path d="M21 7H9a5 5 0 0 0-5 5v3" />
    <path d="M7 13l-4 4 4 4" />
    <path d="M3 17h12a5 5 0 0 0 5-5V9" />
  </svg>
);

export const JwtIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

export const MongooseIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M12 8v7m0 0l-3 3m3-3l3 3" />
  </svg>
);

export const PostmanIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 22l10-6 10 6L12 2z" />
    <path d="M12 2v14" />
  </svg>
);

export const FigmaIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H10v5H7.5A2.5 2.5 0 0 1 5 5.5z" />
    <path d="M5 12A2.5 2.5 0 0 1 7.5 9.5H10v5H7.5A2.5 2.5 0 0 1 5 12z" />
    <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H10v2.5a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 5 18.5z" />
    <path d="M10 9.5h2.5a2.5 2.5 0 0 1 0 5H10v-5z" />
    <path d="M10 3h2.5A2.5 2.5 0 0 1 15 5.5v0A2.5 2.5 0 0 1 12.5 8H10V3z" />
  </svg>
);

export const VercelIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l10 18H2L12 3z" />
  </svg>
);

export const NetlifyIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L3 9l9 13 9-13-9-7z" />
    <path d="M12 22V11.5" />
    <path d="M3 9h18" />
  </svg>
);

export const RagIcon = ({ size = 18, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3.5 5.5L14 16h-4l-.5-2.5C7.5 12.5 6 10.5 6 8a6 6 0 0 1 6-6z" />
    <path d="M10 16h4v2a2 2 0 0 1-4 0v-2z" />
    <path d="M9 10h.01M15 10h.01" />
    <path d="M12 10v2" />
  </svg>
);

export const AwsIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" />
    <path d="M8 14l4-8 4 8" />
    <path d="M10 11h4" />
  </svg>
);

export const CloudflareIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
  </svg>
);

export const DockerIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="20" height="6" rx="2" />
    <rect x="6" y="8" width="4" height="4" rx="1" />
    <rect x="10" y="8" width="4" height="4" rx="1" />
    <rect x="14" y="8" width="4" height="4" rx="1" />
    <rect x="10" y="2" width="4" height="4" rx="1" />
  </svg>
);

export const AzureIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2h2l9 20H2L11 2z" />
    <path d="M7 16h10" />
  </svg>
);

