import * as React from "react";
const SvgDesktopAlt = ({ title, titleId, ...props }) => (
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
      d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3v2H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-3v-2h3a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 18h-4v-2h4zm6-5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16zm0-3H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgDesktopAlt;
