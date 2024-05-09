import * as React from "react";
const SvgFileTimesAlt = ({ title, titleId, ...props }) => (
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
      d="M14 12H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m5.41 7 1.3-1.29a1.004 1.004 0 1 0-1.42-1.42L18 17.59l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM12 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v3a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.1 0 1.1 1.1 0 0 0-.31-.11H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2m1-14.59L15.59 8H14a1 1 0 0 1-1-1zM8 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm4 8H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgFileTimesAlt;
