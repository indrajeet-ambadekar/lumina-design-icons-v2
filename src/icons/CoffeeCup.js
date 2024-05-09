import * as React from "react";
const SvgCoffeeCup = ({ title, titleId, ...props }) => (
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
      d="M9 17h4a5 5 0 0 0 5-5v-1h1a3 3 0 0 0 0-6h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5m9-10h1a1 1 0 1 1 0 2h-1zM6 5h10v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm15 14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgCoffeeCup;
