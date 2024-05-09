import * as React from "react";
const SvgMicrophone = ({ title, titleId, ...props }) => (
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
      d="M12 15a4 4 0 0 0 4-4V5a4 4 0 1 0-8 0v6a4 4 0 0 0 4 4M10 5a2 2 0 1 1 4 0v6a2 2 0 0 1-4 0zm10 6a1 1 0 0 0-2 0 6 6 0 1 1-12 0 1 1 0 1 0-2 0 8 8 0 0 0 7 7.93V21H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A8 8 0 0 0 20 11"
    />
  </svg>
);
export default SvgMicrophone;
