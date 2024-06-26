import * as React from "react";
const SvgImageEdit = ({ title, titleId, ...props }) => (
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
      d="M19 11.48a1 1 0 0 0-1 1v2.39l-1.5-1.48a2.83 2.83 0 0 0-3.92 0l-.7.7-2.49-2.49a2.78 2.78 0 0 0-3.92 0L4 13.09V7.48a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a1 1 0 0 0-1-1m-14 9a1 1 0 0 1-1-1v-3.56L6.88 13A.78.78 0 0 1 8 13l3.17 3.17 4.26 4.26zm13-1a1 1 0 0 1-.17.54l-4.54-4.52.7-.69a.78.78 0 0 1 1.1 0L18 17.7zm3.72-15.25L19.3 1.81a1 1 0 0 0-1.41 0l-4.58 4.58a1 1 0 0 0-.31.71v2.42a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .7-.29l4.58-4.58a1 1 0 0 0 .02-1.42M16 8.52h-1v-1l3.6-3.59 1 1z"
    />
  </svg>
);
export default SvgImageEdit;
