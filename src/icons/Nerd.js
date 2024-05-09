import * as React from "react";
const SvgNerd = ({ title, titleId, ...props }) => (
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
      d="M21.41 8.65v-.06a10 10 0 0 0-18.78-.06.9.9 0 0 0-.08.24 10 10 0 1 0 18.86-.12M12 4a8 8 0 0 1 6.92 4h-1.2a3 3 0 0 0-4.62.22A3.2 3.2 0 0 0 12 8a3.2 3.2 0 0 0-1.1.22A3 3 0 0 0 6.28 8h-1.2A8 8 0 0 1 12 4m4.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 20a8 8 0 0 1-8-8 8.2 8.2 0 0 1 .26-2H5.5a3.001 3.001 0 0 0 6 .18 1 1 0 0 1 1 0 3.001 3.001 0 1 0 6-.18h1.24c.168.653.256 1.325.26 2a8 8 0 0 1-8 8m2.36-5.77a3.76 3.76 0 0 1-4.72 0 1.001 1.001 0 0 0-1.28 1.54 5.68 5.68 0 0 0 7.28 0 1.001 1.001 0 0 0-1.28-1.54"
    />
  </svg>
);
export default SvgNerd;
