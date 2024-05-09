import * as React from "react";
const SvgPercentageAlt = ({ title, titleId, ...props }) => (
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
      d="M7.758 10.758a3 3 0 1 0 0-6.001 3 3 0 0 0 0 6m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8.484 6.484a3 3 0 1 0 0 5.999 3 3 0 0 0 0-5.999m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414"
    />
  </svg>
);
export default SvgPercentageAlt;
