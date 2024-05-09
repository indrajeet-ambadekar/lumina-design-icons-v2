import * as React from "react";
const SvgPicture = ({ title, titleId, ...props }) => (
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
      d="M20 4a1 1 0 0 0 .385-1.919 1 1 0 0 0-1.095.219 1 1 0 0 0-.21.32A.84.84 0 0 0 19 3a1 1 0 0 0 1 1m0 9a1 1 0 0 0-1 1v.39l-1.48-1.48a2.77 2.77 0 0 0-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 0 0-3.93 0L5 12.6V7a1 1 0 0 1 1-1h10a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1M6 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17 4.29 4.3zm13-1a1 1 0 0 1-.18.53L14.31 15l.7-.7a.78.78 0 0 1 1.1 0L19 17.22zm1-14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgPicture;
