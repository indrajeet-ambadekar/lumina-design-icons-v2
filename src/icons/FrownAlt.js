import * as React from "react";
const SvgFrownAlt = ({ title, titleId, ...props }) => (
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
      d="M8.36 15.33a1 1 0 0 0 .173 1.646 1 1 0 0 0 1.107-.116 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.4 5.81 5.81 0 0 0-7.28 0M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20m3-11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgFrownAlt;
