import * as React from "react";
const SvgLayerGroupSlash = ({ title, titleId, ...props }) => (
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
      d="M10.26 5 12 4l7 4-3.15 1.83a1 1 0 1 0 1 1.73l4.65-2.69a1 1 0 0 0 0-1.74l-9-5.2a1 1 0 0 0-1 0l-2.24 1.3a1 1 0 0 0-.37 1.37 1 1 0 0 0 1.37.4M3.71 2.29a1.004 1.004 0 1 0-1.42 1.42L4.54 6l-2 1.17a1 1 0 0 0 0 1.74l9 5.2a1 1 0 0 0 1 0l.1-.06 1.07 1.07-1.67 1-8.54-4.99a1.002 1.002 0 0 0-1.469 1.132 1 1 0 0 0 .47.608l9 5.2a1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13l2.63-1.52 1.07 1.07L12 20l-8.5-4.87a1.003 1.003 0 0 0-1 1.74l9 5.2a1 1 0 0 0 1 0l5.17-3 2.62 2.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 8l1-.58 2.75 2.75zm15.5 3.13-2.12 1.22a1.003 1.003 0 1 0 1 1.74l2.12-1.22a1.006 1.006 0 0 0 .37-1.37 1.003 1.003 0 0 0-1.37-.37"
    />
  </svg>
);
export default SvgLayerGroupSlash;
