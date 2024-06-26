import * as React from "react";
const SvgCornerUpRightAlt = ({ title, titleId, ...props }) => (
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
      d="M19.92 10.12a1 1 0 0 0-.21-.33l-3-3a1.003 1.003 0 1 0-1.42 1.42l1.3 1.29H7a3 3 0 0 0-3 3v4a1 1 0 1 0 2 0v-4a1 1 0 0 1 1-1h9.59l-1.3 1.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76"
    />
  </svg>
);
export default SvgCornerUpRightAlt;
