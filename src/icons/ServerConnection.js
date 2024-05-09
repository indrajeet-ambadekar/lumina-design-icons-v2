import * as React from "react";
const SvgServerConnection = ({ title, titleId, ...props }) => (
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
      d="M11 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m15-9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 .78 2A3 3 0 0 0 2 12v4a3 3 0 0 0 3 3h6v2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-8v-2h6a3 3 0 0 0 3-3v-4a3 3 0 0 0-.78-2A3 3 0 0 0 22 8zm-2 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0-8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-9-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M7 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgServerConnection;
