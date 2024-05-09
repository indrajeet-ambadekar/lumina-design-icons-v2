import * as React from "react";
const SvgArrowToRight = ({ title, titleId, ...props }) => (
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
      d="m17.71 11.29-4-4a1.003 1.003 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 0 0 0 2h11.59l-2.3 2.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33M21 4a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgArrowToRight;
