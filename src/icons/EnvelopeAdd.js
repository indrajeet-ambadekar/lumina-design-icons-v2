import * as React from "react";
const SvgEnvelopeAdd = ({ title, titleId, ...props }) => (
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
      d="M17 7h1v1a1 1 0 0 0 2 0V7h1a1 1 0 1 0 0-2h-1V4a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2m4 4a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.41l5.88 5.89a3 3 0 0 0 4.24 0l2.47-2.47a1.004 1.004 0 1 0-1.42-1.42l-2.47 2.47a1 1 0 0 1-1.4 0L5.41 7H13a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgEnvelopeAdd;
