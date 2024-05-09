import * as React from "react";
const SvgAngleUp = ({ title, titleId, ...props }) => (
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
      d="m17 13.41-4.29-4.24a1 1 0 0 0-1.42 0l-4.24 4.24a1 1 0 1 0 1.41 1.42L12 11.29l3.54 3.54a1 1 0 0 0 1.41 0 1 1 0 0 0 .05-1.42"
    />
  </svg>
);
export default SvgAngleUp;
