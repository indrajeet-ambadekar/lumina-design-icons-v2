import * as React from "react";
const SvgDesert = ({ title, titleId, ...props }) => (
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
      d="M18 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-3 12h-2v-2a1 1 0 0 0-2 0v2H9v-3.38l3.45-1.73A1 1 0 0 0 13 14v-4a1 1 0 0 0-2 0v3.38l-2 1V8a1 1 0 0 0-2 0v8.38l-2-1V13a1 1 0 1 0-2 0v3a1 1 0 0 0 .55.89L7 18.62V20H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgDesert;
