import * as React from "react";
const SvgSwatchbook = ({ title, titleId, ...props }) => (
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
      d="M7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12.06-4 1.23-1.23a3 3 0 0 0 0-4.24l-2.83-2.82a3 3 0 0 0-4.24 0L12 4.94A3 3 0 0 0 9 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-2.94-3M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm2-11.24 2.64-2.64a1 1 0 0 1 1.41 0L18.88 8a1 1 0 0 1 0 1.41L16 12.29l-4 3.95zM20 19a1 1 0 0 1-1 1h-7.18a3.1 3.1 0 0 0 .17-.92L17.07 14H19a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgSwatchbook;
