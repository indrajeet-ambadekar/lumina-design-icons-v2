import * as React from "react";
const SvgNA = ({ title, titleId, ...props }) => (
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
      d="M19 6h-1a3 3 0 0 0-3 3v8a1 1 0 0 0 2 0v-4h3v4a1 1 0 0 0 2 0V9a3 3 0 0 0-3-3m1 5h-3V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zM8 6a1 1 0 0 0-1 1v5.76L3.89 6.55A1 1 0 0 0 2 7v10a1 1 0 1 0 2 0v-5.76l3.11 6.21A1 1 0 0 0 8 18q.115.015.23 0A1 1 0 0 0 9 17V7a1 1 0 0 0-1-1m4-2a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgNA;
