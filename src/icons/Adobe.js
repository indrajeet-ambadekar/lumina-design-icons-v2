import * as React from "react";
const SvgAdobe = ({ title, titleId, ...props }) => (
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
      d="M9.07 17.28h2.78l1.75 3.44h2.54L12 9.87zM2 3v18L9.42 3zm12.48 0L22 20.81V3z"
    />
  </svg>
);
export default SvgAdobe;
