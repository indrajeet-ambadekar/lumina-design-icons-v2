import * as React from "react";
const SvgArrowToBottom = ({ title, titleId, ...props }) => (
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
      d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2m-7.71-2.29a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1.004 1.004 0 1 0-1.42-1.42L13 14.59V3a1 1 0 0 0-2 0v11.59l-2.29-2.3a1.005 1.005 0 0 0-1.714.71 1 1 0 0 0 .294.71z"
    />
  </svg>
);
export default SvgArrowToBottom;
