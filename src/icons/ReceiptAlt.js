import * as React from "react";
const SvgReceiptAlt = ({ title, titleId, ...props }) => (
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
      d="M10 8h6a1 1 0 1 0 0-2h-6a1 1 0 0 0 0 2m-2 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2m0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2M20 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1.6.8l2.07-1.55 2.06 1.55a1 1 0 0 0 1.2 0L12 20.25l2.07 1.55a1 1 0 0 0 1.2 0l2.06-1.55 2.07 1.55a1 1 0 0 0 1.45-.277A1 1 0 0 0 21 21V3a1 1 0 0 0-1-1m-1 17-1.07-.8a1 1 0 0 0-1.2 0l-2.06 1.55-2.07-1.55a1 1 0 0 0-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 0 0-1.2 0L5 19V4h14z"
    />
  </svg>
);
export default SvgReceiptAlt;
