import * as React from "react";
const SvgArrowResizeDiagonal = ({ title, titleId, ...props }) => (
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
      d="M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 1 0 0 2h3.59L4 18.59V15a1 1 0 1 0-2 0v6a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54c.12.051.25.078.38.08h6a1 1 0 0 0 0-2H5.41L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"
    />
  </svg>
);
export default SvgArrowResizeDiagonal;
