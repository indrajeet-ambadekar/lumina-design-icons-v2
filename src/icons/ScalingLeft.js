import * as React from "react";
const SvgScalingLeft = ({ title, titleId, ...props }) => (
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
      d="M21 16a1 1 0 0 0-1 1v1.59L13.41 12l2.13-2.12a1.004 1.004 0 1 0-1.42-1.42L12 10.59 5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41L10.59 12l-2.13 2.12a1 1 0 0 0 .71 1.71 1 1 0 0 0 .71-.29L12 13.41 18.59 20H17a1 1 0 0 0 0 2h4c.13-.002.26-.029.38-.08a1 1 0 0 0 .54-.54c.051-.12.078-.25.08-.38v-4a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgScalingLeft;
