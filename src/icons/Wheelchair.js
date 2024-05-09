import * as React from "react";
const SvgWheelchair = ({ title, titleId, ...props }) => (
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
      d="M12 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2m-6.8-1.6a4.001 4.001 0 0 1-7.2-2.4 4 4 0 0 1 2.4-3.66A1.003 1.003 0 0 0 7.1 11a5.999 5.999 0 1 0 7.2 9.1 1 1 0 0 0-1.6-1.2"
    />
  </svg>
);
export default SvgWheelchair;
