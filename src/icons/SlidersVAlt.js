import * as React from "react";
const SvgSlidersVAlt = ({ title, titleId, ...props }) => (
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
      d="M20 8.18V3a1 1 0 1 0-2 0v5.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-7.18a3 3 0 0 0 0-5.64M19 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-6 2.18V3a1 1 0 1 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64M12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 6.18V3a1 1 0 1 0-2 0v3.18a3 3 0 0 0 0 5.64V21a1 1 0 1 0 2 0v-9.18a3 3 0 0 0 0-5.64M5 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </svg>
);
export default SvgSlidersVAlt;
