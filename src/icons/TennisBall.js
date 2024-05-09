import * as React from "react";
const SvgTennisBall = ({ title, titleId, ...props }) => (
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
      d="M12 2a10 10 0 0 0-7.35 16.76l.09.1a10 10 0 0 0 14.52 0l.09-.1A9.999 9.999 0 0 0 12 2M5.61 16.79a7.93 7.93 0 0 1 0-9.58 6 6 0 0 1 0 9.58M12 20a7.9 7.9 0 0 1-5-1.77A8 8 0 0 0 7 5.77a7.95 7.95 0 0 1 10 0 8 8 0 0 0 0 12.46A7.9 7.9 0 0 1 12 20m6.39-3.21a6 6 0 0 1 0-9.58 7.93 7.93 0 0 1 0 9.58"
    />
  </svg>
);
export default SvgTennisBall;
