import * as React from "react";
const SvgShop = ({ title, titleId, ...props }) => (
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
      d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1m-7 2h2v3a1 1 0 0 1-2 0zm-4 0h2v3a1 1 0 0 1-2 0zM7 7h2v3a1 1 0 1 1-2 0zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1m10 10h-4v-2a2 2 0 0 1 4 0zm5 0h-3v-2a4 4 0 1 0-8 0v2H5v-8.18a3.2 3.2 0 0 0 1-.6 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 4 0c.293.26.632.464 1 .6zm2-11a1 1 0 0 1-2 0V7h2zM4.3 3H20a1 1 0 1 0 0-2H4.3a1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgShop;
