import * as React from "react";
const SvgExpandFromCorner = ({ title, titleId, ...props }) => (
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
      d="M11 12H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-1 8H4v-6h6zM21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 1 0 0 2h3.59l-5.3 5.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"
    />
  </svg>
);
export default SvgExpandFromCorner;
