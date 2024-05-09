import * as React from "react";
const SvgEnvelopeBlock = ({ title, titleId, ...props }) => (
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
      d="M17.5 13.26a5 5 0 1 0 .082-10 5 5 0 0 0-.082 10m2.12-2.88a3 3 0 0 1-3.4.58l4-4a3 3 0 0 1-.6 3.42m-4.24-4.24a3 3 0 0 1 2.12-.88 3 3 0 0 1 1.28.3l-4 4a3 3 0 0 1 .6-3.42m5.12 8.12a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V9.67l5.88 5.88a3 3 0 0 0 3.282.645 3 3 0 0 0 .988-.675 1 1 0 0 0 0-1.39 1 1 0 0 0-1.43 0 1 1 0 0 1-1.4 0L4.91 8.26H9.5a1 1 0 1 0 0-2h-5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgEnvelopeBlock;
