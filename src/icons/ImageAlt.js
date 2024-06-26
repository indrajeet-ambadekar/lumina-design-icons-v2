import * as React from "react";
const SvgImageAlt = ({ title, titleId, ...props }) => (
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
      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M5 18a1 1 0 0 1-1-1v-2.42l3.3-3.29a1 1 0 0 1 1.4 0L15.41 18zm15-1a1 1 0 0 1-1 1h-.77l-3.81-3.83.88-.88a1 1 0 0 1 1.4 0l3.3 3.29zm0-3.24-1.88-1.87a3.06 3.06 0 0 0-4.24 0l-.88.88-2.88-2.88a3.06 3.06 0 0 0-4.24 0L4 11.76V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgImageAlt;
