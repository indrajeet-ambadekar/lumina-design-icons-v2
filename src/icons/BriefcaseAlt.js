import * as React from "react";
const SvgBriefcaseAlt = ({ title, titleId, ...props }) => (
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
      d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21 21 0 0 0 3 .94v.59a1 1 0 1 0 2 0v-.21a23 23 0 0 0 3 .21 23 23 0 0 0 3-.21v.21a1 1 0 0 0 2 0v-.59a21 21 0 0 0 3-.94zm0-7.69c-.973.41-1.976.745-3 1v-.31a1 1 0 0 0-2 0v.74c-1.989.3-4.011.3-6 0v-.74a1 1 0 1 0-2 0v.33a20.4 20.4 0 0 1-3-1V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgBriefcaseAlt;
