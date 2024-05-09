import * as React from "react";
const SvgFileBlockAlt = ({ title, titleId, ...props }) => (
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
      d="M7 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm5 12H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v1a1 1 0 0 0 2 0V8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19.3.3 0 0 0-.09 0L11.06 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a1 1 0 0 0 0-2m0-14.59L14.59 8H13a1 1 0 0 1-1-1zm8.83 9.76a4.1 4.1 0 0 0-5.66 0 4 4 0 1 0 5.66 0M16 18a2 2 0 0 1 2-2q.259.004.51.07l-2.44 2.44A2 2 0 0 1 16 18m3.41 1.41a2 2 0 0 1-1.91.5l2.43-2.42q.066.251.07.51a2 2 0 0 1-.59 1.41M11 18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm2-6H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgFileBlockAlt;
