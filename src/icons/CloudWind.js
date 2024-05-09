import * as React from "react";
const SvgCloudWind = ({ title, titleId, ...props }) => (
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
      d="M5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14-4h-7a1 1 0 1 0 0 2h7a1 1 0 1 1 0 2 1 1 0 1 0 0 2 3 3 0 0 0 0-6m-5-3a1 1 0 0 0 1 1h4a3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1m-4 4a1 1 0 0 0-1-1H6a2 2 0 1 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1.003 1.003 0 0 0 1.9-.64A7 7 0 0 0 5.06 8.11 4 4 0 0 0 6 16h3a1 1 0 0 0 1-1m0-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4 7H9a1 1 0 1 0 0 2h5a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgCloudWind;
