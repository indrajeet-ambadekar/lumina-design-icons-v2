import * as React from "react";
const SvgServerNetwork = ({ title, titleId, ...props }) => (
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
      d="M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m13 13h-6.18A3 3 0 0 0 13 17.18V15h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2A3 3 0 0 0 20 6V4a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 10v2a3 3 0 0 0 3 3h4v2.18A3 3 0 0 0 9.18 19H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1 9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1zm5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2M8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgServerNetwork;
