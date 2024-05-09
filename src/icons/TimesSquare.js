import * as React from "react";
const SvgTimesSquare = ({ title, titleId, ...props }) => (
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
      d="M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1.004 1.004 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgTimesSquare;
