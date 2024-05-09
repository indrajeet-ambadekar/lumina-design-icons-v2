import * as React from "react";
const SvgInvoice = ({ title, titleId, ...props }) => (
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
      d="M13 16H7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2m-4-6h2a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2m12 2h-3V3a1 1 0 0 0-1.5-.87l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1zm15-1a1 1 0 1 1-2 0v-5h2zm-7-7H7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2"
    />
  </svg>
);
export default SvgInvoice;
