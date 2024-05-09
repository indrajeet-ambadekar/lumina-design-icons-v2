import * as React from "react";
const SvgSignOutAlt = ({ title, titleId, ...props }) => (
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
      d="m12.59 13-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4q.137-.144.21-.33a1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1.003 1.003 0 1 0-1.42 1.42l2.3 2.29H3a1 1 0 1 0 0 2zM12 2a10 10 0 0 0-9 5.55 1.006 1.006 0 1 0 1.8.9A8 8 0 1 1 12 20a7.93 7.93 0 0 1-7.16-4.45 1.006 1.006 0 0 0-1.8.9A10 10 0 1 0 12 2"
    />
  </svg>
);
export default SvgSignOutAlt;
