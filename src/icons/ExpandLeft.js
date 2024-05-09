import * as React from "react";
const SvgExpandLeft = ({ title, titleId, ...props }) => (
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
      d="M9.17 10.17a1 1 0 0 0 .71-1.71L5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l4.46 4.47a1 1 0 0 0 .71.29m6.37-1.71a1 1 0 0 0-1.42 0l-5.66 5.66a1 1 0 0 0 .71 1.71 1 1 0 0 0 .71-.29l5.66-5.66a1 1 0 0 0 0-1.42M21 16a1 1 0 0 0-1 1v1.59l-4.46-4.47a1.004 1.004 0 1 0-1.42 1.42L18.59 20H17a1 1 0 0 0 0 2h4c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgExpandLeft;
