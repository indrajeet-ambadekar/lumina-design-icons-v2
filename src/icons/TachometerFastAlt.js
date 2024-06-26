import * as React from "react";
const SvgTachometerFastAlt = ({ title, titleId, ...props }) => (
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
      d="M12 5a10 10 0 0 0-8.66 15 1.004 1.004 0 0 0 1.74-1A7.9 7.9 0 0 1 4 15a8 8 0 1 1 14.93 4 1 1 0 1 0 1.73 1A10 10 0 0 0 12 5m2.84 5.76-1.55 1.54A2.9 2.9 0 0 0 12 12a3 3 0 1 0 3 3 2.9 2.9 0 0 0-.3-1.28l1.55-1.54a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0M12 16a1 1 0 0 1 0-2 1 1 0 0 1 .7.28 1 1 0 0 1 .3.72 1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgTachometerFastAlt;
