import * as React from "react";
const SvgSadSquint = ({ title, titleId, ...props }) => (
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
      d="m9.08 12.21 1.5-1.5a1 1 0 0 0 0-1.42l-1.5-1.5a1.004 1.004 0 1 0-1.42 1.42l.8.79-.8.79a1.001 1.001 0 0 0 1.094 1.636 1 1 0 0 0 .326-.216m-.72 3.12a1 1 0 0 0 .173 1.646 1 1 0 0 0 1.107-.116 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.4 5.81 5.81 0 0 0-7.28 0m8.22-7.54a1 1 0 0 0-1.42 0l-1.5 1.5a1 1 0 0 0 0 1.42l1.5 1.5a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71l-.79-.79.79-.79a1 1 0 0 0 0-1.42M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"
    />
  </svg>
);
export default SvgSadSquint;
