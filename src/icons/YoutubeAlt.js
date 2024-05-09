import * as React from "react";
const SvgYoutubeAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48 9.6 9.6 0 0 0 .3 2c.12.505.365.972.71 1.36a2.86 2.86 0 0 0 1.49.78c2.156.266 4.328.376 6.5.33 3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78c.28-.28.49-.623.61-1 .358-1.097.533-2.246.52-3.4.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"
    />
  </svg>
);
export default SvgYoutubeAlt;
