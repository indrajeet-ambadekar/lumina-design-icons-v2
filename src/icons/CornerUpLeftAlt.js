import * as React from "react";
const SvgCornerUpLeftAlt = ({ title, titleId, ...props }) => (
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
      d="M17 9.5H7.41l1.3-1.29a1.004 1.004 0 0 0-1.42-1.42l-3 3a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-1.3-1.29H17a1 1 0 0 1 1 1v4a1 1 0 0 0 2 0v-4a3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgCornerUpLeftAlt;
