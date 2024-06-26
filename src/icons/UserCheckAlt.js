import * as React from "react";
const SvgUserCheckAlt = ({ title, titleId, ...props }) => (
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
      d="M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 1 0 2 0 6 6 0 1 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28M10 11.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m11.71-2.37a1 1 0 0 0-1.42 0l-2 2-.62-.63a1.002 1.002 0 0 0-1.71.705 1 1 0 0 0 .29.705l1.34 1.34a1 1 0 0 0 1.41 0l2.67-2.67a1 1 0 0 0 .04-1.45"
    />
  </svg>
);
export default SvgUserCheckAlt;
