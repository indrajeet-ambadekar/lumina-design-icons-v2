import * as React from "react";
const SvgBolt = ({ title, titleId, ...props }) => (
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
      d="M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.52-1.157A1 1 0 0 0 14.73 2h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .524 1.159A1 1 0 0 0 5.02 14h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07m-9.79 8.68 1.07-4a1 1 0 0 0-.52-1.157 1 1 0 0 0-.44-.103H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57z"
    />
  </svg>
);
export default SvgBolt;
