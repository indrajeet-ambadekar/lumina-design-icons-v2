import * as React from "react";
const SvgSignAlt = ({ title, titleId, ...props }) => (
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
      d="m21.78 11.88-2-2.5A1 1 0 0 0 19 9h-6V3a1 1 0 0 0-2 0v1H5a1 1 0 0 0-.78.38l-2 2.5a1 1 0 0 0 0 1.24l2 2.5A1 1 0 0 0 5 11h6v9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-4h6a1 1 0 0 0 .78-.38l2-2.5a1 1 0 0 0 0-1.24M11 9H5.48l-1.2-1.5L5.48 6H11zm7.52 5H13v-3h5.52l1.2 1.5z"
    />
  </svg>
);
export default SvgSignAlt;
