import * as React from "react";
const SvgComments = ({ title, titleId, ...props }) => (
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
      d="M20.61 19.19a7 7 0 0 0-2.74-10.57 8 8 0 1 0-14.19 6.29l-1.39 1.38a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 18h5.69A7 7 0 0 0 15 22h6a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09zM8 15q.002.504.08 1H5.41l.35-.34a1 1 0 0 0 0-1.42A5.93 5.93 0 0 1 4 10a6 6 0 0 1 6-6 5.94 5.94 0 0 1 5.65 4H15a7 7 0 0 0-7 7m10.54 5 .05.05H15a5 5 0 1 1 3.54-1.46 1 1 0 0 0-.3.7 1 1 0 0 0 .3.71"
    />
  </svg>
);
export default SvgComments;
