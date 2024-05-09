import * as React from "react";
const SvgMoneybagAlt = ({ title, titleId, ...props }) => (
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
      d="M19 7h-3V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm-6 4a1 1 0 0 1 1-1h1a2 2 0 0 1-2 2zm1 9a1 1 0 0 1-1-1v-1a2 2 0 0 1 2 2zm15-1a1 1 0 0 1-1 1h-1a2 2 0 0 1 2-2zm0-3a4 4 0 0 0-4 4H8a4 4 0 0 0-4-4v-2a4 4 0 0 0 4-4h8a4 4 0 0 0 4 4zm0-4a2 2 0 0 1-2-2h1a1 1 0 0 1 1 1zm-8 0a3 3 0 1 0 0 5.999A3 3 0 0 0 12 11m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </svg>
);
export default SvgMoneybagAlt;
