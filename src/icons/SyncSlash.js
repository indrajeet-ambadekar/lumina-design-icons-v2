import * as React from "react";
const SvgSyncSlash = ({ title, titleId, ...props }) => (
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
      d="M19.88 15.5h-4.5a1 1 0 0 0 0 2h2.4A8 8 0 0 1 12 20a8.1 8.1 0 0 1-3.12-.63l-1.49 1.49A9.8 9.8 0 0 0 12 22a10 10 0 0 0 6.88-2.77V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1m-1.57-8.4 1.43-1.43 2-2a1.004 1.004 0 1 0-1.42-1.42l-2 2A9.9 9.9 0 0 0 12 2a10 10 0 0 0-6.88 2.77V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 1 0 0-2h-2.4a7.93 7.93 0 0 1 10.67-.81l-11.2 11.2A7.93 7.93 0 0 1 4 12a1 1 0 1 0-2 0 9.9 9.9 0 0 0 2.27 6.32l-2 2a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l2-2 1.43-1.43zm1.06 1.78c.415.988.629 2.048.63 3.12a1 1 0 0 0 2 0 9.8 9.8 0 0 0-1.14-4.61z"
    />
  </svg>
);
export default SvgSyncSlash;
