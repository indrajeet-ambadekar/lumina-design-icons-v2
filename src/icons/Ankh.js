import * as React from "react";
const SvgAnkh = ({ title, titleId, ...props }) => (
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
      d="M18 12h-3.09A7.23 7.23 0 0 0 17 7 5 5 0 0 0 7 7a7.23 7.23 0 0 0 2.09 5H6a1 1 0 0 0 0 2h5v7a1 1 0 0 0 2 0v-7h5a1 1 0 0 0 0-2m-6-.16c-.93-.62-3-2.26-3-4.84a3 3 0 1 1 6 0c0 2.58-2.07 4.23-3 4.84"
    />
  </svg>
);
export default SvgAnkh;
