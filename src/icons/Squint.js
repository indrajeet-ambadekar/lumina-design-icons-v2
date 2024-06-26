import * as React from "react";
const SvgSquint = ({ title, titleId, ...props }) => (
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
      d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-5.92-1.79 1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1.004 1.004 0 1 0-1.42 1.42l.8.79-.8.79a1.001 1.001 0 0 0 1.094 1.636 1 1 0 0 0 .326-.216M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m4.58-12.21a1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71l-.79-.79.79-.79a1 1 0 0 0 0-1.42"
    />
  </svg>
);
export default SvgSquint;
