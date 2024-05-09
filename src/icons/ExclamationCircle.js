import * as React from "react";
const SvgExclamationCircle = ({ title, titleId, ...props }) => (
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
      d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m.92 8.62a.8.8 0 0 0-.09-.18l-.12-.15a1 1 0 0 0-1.09-.21 1.2 1.2 0 0 0-.33.21A1 1 0 0 0 11 16c.002.13.029.26.08.38a.9.9 0 0 0 .54.54.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54c.051-.12.078-.25.08-.38a1.4 1.4 0 0 0 0-.2.6.6 0 0 0-.08-.18M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"
    />
  </svg>
);
export default SvgExclamationCircle;
