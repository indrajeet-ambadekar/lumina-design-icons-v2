import * as React from "react";
const SvgClapperBoard = ({ title, titleId, ...props }) => (
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
      d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-2.91 2-4 4H7.91l4-4zM4 5a1 1 0 0 1 1-1h4.09l-4 4H4zm16 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16zm0-11h-5.09l4-4H19a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgClapperBoard;
