import * as React from "react";
const SvgYenCircle = ({ title, titleId, ...props }) => (
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
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18m2.83-14.55L12 10.7 9.17 6.45a1 1 0 0 0-1.67 1.1l2.11 3.17H9a1 1 0 0 0 0 2h2l.05.08v.92H9a1 1 0 0 0 0 2h2V18a1 1 0 0 0 2 0v-2.28h2a1 1 0 0 0 0-2h-2v-.92l.05-.08H15a1 1 0 0 0 0-2h-.61l2.11-3.17a1 1 0 0 0-1.67-1.1"
    />
  </svg>
);
export default SvgYenCircle;
