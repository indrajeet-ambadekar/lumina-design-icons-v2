import * as React from "react";
const SvgBatteryEmpty = ({ title, titleId, ...props }) => (
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
      d="M17 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 8H4V9h13zm4-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgBatteryEmpty;
