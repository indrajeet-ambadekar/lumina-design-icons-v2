import * as React from "react";
const SvgFileTimes = ({ title, titleId, ...props }) => (
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
      d="M14.71 12.29a1 1 0 0 0-1.42 0L12 13.59l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 15l1.3-1.29a1 1 0 0 0 0-1.42M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.1a1.1 1.1 0 0 0-.31-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94m-6-3.53L16.59 8H15a1 1 0 0 1-1-1zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3z"
    />
  </svg>
);
export default SvgFileTimes;
