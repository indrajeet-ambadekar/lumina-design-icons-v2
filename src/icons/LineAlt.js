import * as React from "react";
const SvgLineAlt = ({ title, titleId, ...props }) => (
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
      d="M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l18-18a1 1 0 0 0 0-1.42"
    />
  </svg>
);
export default SvgLineAlt;
