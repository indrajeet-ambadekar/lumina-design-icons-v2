import * as React from "react";
const SvgTextStrikeThrough = ({ title, titleId, ...props }) => (
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
      d="M15 13H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2m2-7H7a1 1 0 0 0 0 2h4v2a1 1 0 0 0 2 0V8h4a1 1 0 1 0 0-2"
    />
  </svg>
);
export default SvgTextStrikeThrough;
