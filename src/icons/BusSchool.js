import * as React from "react";
const SvgBusSchool = ({ title, titleId, ...props }) => (
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
      d="M1 12.5v4a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-10a3 3 0 0 0-3-3H8.44A3 3 0 0 0 5.6 5.55L4.16 9.86l-2.71 1.81a1 1 0 0 0-.45.83m20-3h-2v-4h1a1 1 0 0 1 1 1zm-4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2-6h6v4h-.78a3 3 0 0 0-4.44 0H15zm0-6h2v4h-2zm-4 6h2v4h-2zm0-6h2v4h-2zm-2 4H6.39l1.1-3.32a1 1 0 0 1 .95-.68H9zm-4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M3 13l2.3-1.5H9v4h-.78a3 3 0 0 0-4.44 0H3z"
    />
  </svg>
);
export default SvgBusSchool;
