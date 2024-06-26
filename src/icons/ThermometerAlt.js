import * as React from "react";
const SvgThermometerAlt = ({ title, titleId, ...props }) => (
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
      d="m16.29 6.29-7 7a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l7-7a1.004 1.004 0 1 0-1.42-1.42m4.25-2.83a5 5 0 0 0-7.08 0l-8.17 8.23a1 1 0 0 0-.29.7v5.19l-2.71 2.71a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22L6.42 19h5.19a1 1 0 0 0 .7-.29l8.23-8.17a5 5 0 0 0 0-7.08m-1.42 5.66L11.2 17H7v-4.2l7.88-7.92a3 3 0 0 1 4.24 4.24"
    />
  </svg>
);
export default SvgThermometerAlt;
