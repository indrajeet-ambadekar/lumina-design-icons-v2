import * as React from "react";
const SvgAngleDoubleLeft = ({ title, titleId, ...props }) => (
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
      d="M11.46 8.29a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L9.16 12l2.3-2.29a1 1 0 0 0 0-1.42m3.2 3.71L17 9.71a1.004 1.004 0 1 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095z"
    />
  </svg>
);
export default SvgAngleDoubleLeft;
