import * as React from "react";
const SvgCommentNotes = ({ title, titleId, ...props }) => (
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
      d="M11 11h6a1 1 0 0 0 0-2h-6a1 1 0 1 0 0 2M7 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5-11A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 .3-.71 1 1 0 0 0-.3-.7A8 8 0 1 1 12 20m5-7h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgCommentNotes;
