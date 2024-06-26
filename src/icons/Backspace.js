import * as React from "react";
const SvgBackspace = ({ title, titleId, ...props }) => (
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
      d="M19 5H9.83a3 3 0 0 0-2.12.88l-5.42 5.41a1 1 0 0 0 0 1.42l5.42 5.41a3 3 0 0 0 2.12.88H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H9.83a1.05 1.05 0 0 1-.71-.29L4.41 12l4.71-4.71A1.05 1.05 0 0 1 9.83 7H19a1 1 0 0 1 1 1zm-3.29-6.71a1 1 0 0 0-1.42 0L14 10.59l-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l1.29-1.3 1.29 1.3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L15.41 12l1.3-1.29a1 1 0 0 0 0-1.42"
    />
  </svg>
);
export default SvgBackspace;
