import * as React from "react";
const SvgStopwatch = ({ title, titleId, ...props }) => (
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
      d="m18.3 8.59.91-.9a1.004 1.004 0 1 0-1.42-1.42l-.9.91a8 8 0 0 0-9.79 0l-.91-.92a1.008 1.008 0 0 0-1.42 1.43l.92.91A7.92 7.92 0 0 0 4 13.5a8 8 0 1 0 14.3-4.91M12 19.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12m-2-15h4a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2m3 6a1 1 0 1 0-2 0v1.89a1.5 1.5 0 1 0 2 0z"
    />
  </svg>
);
export default SvgStopwatch;
