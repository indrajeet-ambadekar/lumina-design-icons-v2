import * as React from "react";
const SvgDizzyMeh = ({ title, titleId, ...props }) => (
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
      d="m9 11.71.29-.3.29.3a1 1 0 0 0 1.639-.325A1 1 0 0 0 11 10.29l-.3-.29.3-.29a1.018 1.018 0 1 0-1.46-1.42l-.29.3-.25-.3a1.018 1.018 0 1 0-1.46 1.42l.3.29-.3.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219zM15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m5-11.71a1 1 0 0 0-1.42 0l-.29.3-.29-.3a1.004 1.004 0 0 0-1.42 1.42l.3.29-.3.29a1.002 1.002 0 0 0 .325 1.639A1 1 0 0 0 15 11.71l.29-.3.29.3a1.002 1.002 0 0 0 1.639-.325A1 1 0 0 0 17 10.29l-.3-.29.3-.29a1 1 0 0 0 0-1.42"
    />
  </svg>
);
export default SvgDizzyMeh;
