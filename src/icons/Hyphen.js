import * as React from "react";
const SvgHyphen = ({ title, titleId, ...props }) => (
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
    <path fill="#000" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
  </svg>
);
export default SvgHyphen;
