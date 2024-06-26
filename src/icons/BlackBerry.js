import * as React from "react";
const SvgBlackBerry = ({ title, titleId, ...props }) => (
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
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M7.19 13.35H5.27l.52-2.41h1.84c1.2 0 1.48.58 1.48 1.05 0 .65-.43 1.36-1.92 1.36m.66-3.64H5.94l.52-2.41H8.3c1.19 0 1.47.59 1.47 1 0 .7-.42 1.41-1.92 1.41m3.75 7.43H9.68l.53-2.42h1.84c1.19 0 1.47.59 1.47 1.06 0 .65-.42 1.36-1.92 1.36m.71-3.79H10.4l.52-2.41h1.84c1.19 0 1.47.58 1.47 1.05 0 .65-.42 1.36-1.92 1.36M13 9.71h-1.94l.52-2.41h1.84c1.2 0 1.48.59 1.48 1 0 .7-.43 1.41-1.9 1.41m3.74 5.61h-1.93l.52-2.42h1.84c1.19 0 1.48.59 1.48 1.06 0 .65-.43 1.36-1.93 1.36zm.72-3.44h-1.94L16 9.46h1.84c1.2 0 1.48.59 1.48 1 .04.71-.39 1.42-1.88 1.42z"
    />
  </svg>
);
export default SvgBlackBerry;
