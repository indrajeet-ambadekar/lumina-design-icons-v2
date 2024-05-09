import * as React from "react";
const SvgArrowsResize = ({ title, titleId, ...props }) => (
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
      d="M21.92 11.62a1 1 0 0 0-.21-.33l-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H13V8a1 1 0 0 0-2 0v3H5.41l.8-.79a1.004 1.004 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-.8-.79H11v3a1 1 0 0 0 2 0v-3h5.59l-.8.79a1.002 1.002 0 0 0 .326 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76"
    />
  </svg>
);
export default SvgArrowsResize;
