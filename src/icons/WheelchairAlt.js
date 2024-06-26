import * as React from "react";
const SvgWheelchairAlt = ({ title, titleId, ...props }) => (
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
      d="M20 16.18V16a3 3 0 0 0-2-2.82V7h1a1 1 0 1 0 0-2H7a3 3 0 0 0-3-3H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v7.42A5 5 0 1 0 11.58 15H17a1 1 0 0 1 1 1v.18a3 3 0 1 0 2 0M7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6m9-7h-6a4.93 4.93 0 0 0-3-1v-1h9zm0-4H7V7h9zm3 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgWheelchairAlt;
