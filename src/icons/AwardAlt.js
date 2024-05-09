import * as React from "react";
const SvgAwardAlt = ({ title, titleId, ...props }) => (
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
      d="M12 1a7 7 0 0 0-5 11.89V22a1 1 0 0 0 1.45.89L12 21.12l3.55 1.77a1 1 0 0 0 .98-.04A1 1 0 0 0 17 22v-9.11A7 7 0 0 0 12 1m3 19.38-2.55-1.27a1 1 0 0 0-.9 0L9 20.38v-6.06a7 7 0 0 0 2 .6V16a1 1 0 0 0 2 0v-1.08a7 7 0 0 0 2-.6zM12 13a5 5 0 1 1 0-9.999A5 5 0 0 1 12 13"
    />
  </svg>
);
export default SvgAwardAlt;
