import * as React from "react";
const SvgWindGust = ({ title, titleId, ...props }) => (
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
      d="M3.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0h7A3 3 0 1 0 13 3.4a1 1 0 1 0 1 1.73 1.1 1.1 0 0 1 .5-.13 1 1 0 1 1 0 2h-7a1 1 0 0 0 0 2m-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2m17-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6m-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1.1 1.1 0 0 1-.5-.13 1 1 0 1 0-1 1.73 3 3 0 1 0 1.5-5.6m-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgWindGust;
