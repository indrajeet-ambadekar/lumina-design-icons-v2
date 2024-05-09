import * as React from "react";
const SvgBookOpen = ({ title, titleId, ...props }) => (
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
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7zM2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
    />
  </svg>
);
export default SvgBookOpen;
