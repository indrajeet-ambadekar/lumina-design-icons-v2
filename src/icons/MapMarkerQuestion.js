import * as React from "react";
const SvgMapMarkerQuestion = ({ title, titleId, ...props }) => (
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
      d="m12.44 13.11-.17-.11a1 1 0 0 0-1.09.22.998.998 0 0 0-.3.71 1 1 0 0 0 .08.38c.107.24.3.433.54.54a1 1 0 0 0 .38.08 1 1 0 0 0 .71-.3 1 1 0 0 0 0-1.41zM11.88 6A2.75 2.75 0 0 0 9.5 7.32a1 1 0 1 0 1.73 1 .77.77 0 0 1 .65-.32.75.75 0 1 1 0 1.5 1 1 0 1 0 0 2 2.75 2.75 0 1 0 0-5.5m8.58 3.68A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83zm-3.86 5.37-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.5 6.5 0 0 1-1.87 5.24"
    />
  </svg>
);
export default SvgMapMarkerQuestion;
