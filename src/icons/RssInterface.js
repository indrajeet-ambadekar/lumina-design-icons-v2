import * as React from "react";
const SvgRssInterface = ({ title, titleId, ...props }) => (
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
      d="M3 14a1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5m-.71 4.29a1 1 0 1 0 1.42 1.409 1 1 0 0 0-1.42-1.409M19 4H5a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M3 10a1 1 0 0 0 0 2 7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9"
    />
  </svg>
);
export default SvgRssInterface;
