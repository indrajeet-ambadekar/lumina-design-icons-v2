import * as React from "react";
const SvgCommentAltSlash = ({ title, titleId, ...props }) => (
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
      d="M10.66 6H17a1 1 0 0 1 1 1v6.34a1 1 0 1 0 2 0V7a3 3 0 0 0-3-3h-6.34a1 1 0 0 0 0 2m11.05 14.29-18-18a1.004 1.004 0 0 0-1.42 1.42l2 2A3 3 0 0 0 4 7v12a1 1 0 0 0 .62.92A.84.84 0 0 0 5 20a1 1 0 0 0 .71-.29L8.41 17h7.18l4.7 4.71a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22 1 1 0 0 0 0-1.42M8 15a1 1 0 0 0-.71.29L6 16.59V7.41L13.59 15z"
    />
  </svg>
);
export default SvgCommentAltSlash;
