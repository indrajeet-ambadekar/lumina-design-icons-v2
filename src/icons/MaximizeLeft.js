import * as React from "react";
const SvgMaximizeLeft = ({ title, titleId, ...props }) => (
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
      d="M5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l5.79 5.8a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM21 16a1 1 0 0 0-1 1v1.59l-5.79-5.8a1.004 1.004 0 1 0-1.42 1.42l5.8 5.79H17a1 1 0 0 0 0 2h4c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgMaximizeLeft;
