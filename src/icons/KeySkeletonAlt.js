import * as React from "react";
const SvgKeySkeletonAlt = ({ title, titleId, ...props }) => (
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
      d="m21.71 6.53-1.42-1.41 1.42-1.41a1.004 1.004 0 1 0-1.42-1.42L9.75 12.83a5 5 0 1 0 1.42 1.42l4.88-4.89 1.41 1.42a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.71L17.46 8l1.42-1.42L20.29 8a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.47M7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);
export default SvgKeySkeletonAlt;
