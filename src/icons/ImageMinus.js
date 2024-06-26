import * as React from "react";
const SvgImageMinus = ({ title, titleId, ...props }) => (
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
      d="M21 3h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m-2 4a1 1 0 0 0-1 1v5.39l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 11.61V6a1 1 0 0 1 1-1h8a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1M5 19a1 1 0 0 1-1-1v-3.57l2.9-2.89a.79.79 0 0 1 1.09 0l3.17 3.17L15.45 19zm13-1a1 1 0 0 1-.18.54L13.31 14l.7-.69a.77.77 0 0 1 1.1 0L18 16.22z"
    />
  </svg>
);
export default SvgImageMinus;
