import * as React from "react";
const SvgParcelAlt = ({ title, titleId, ...props }) => (
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
      d="M7 14h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m6 2H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m6-14H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 2v3.29l-1.51-.84a1 1 0 0 0-1 0L10 7.29V4zm6 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 1.5.86L12 8.47l2.51 1.4a1 1 0 0 0 1.197-.163A1 1 0 0 0 16 9V4h3a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgParcelAlt;
