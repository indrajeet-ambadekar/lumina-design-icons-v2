import * as React from "react";
const SvgBoltSlash = ({ title, titleId, ...props }) => (
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
      d="M8.67 4.23A1 1 0 0 0 9.6 4h5.1l-1.27 4.74a1 1 0 0 0 .52 1.157 1 1 0 0 0 .44.103H18l-1.13 1.24a1 1 0 0 0 1.145 1.583 1 1 0 0 0 .335-.243L21 9.67A1 1 0 0 0 20.23 8h-4.54L17 3.26a1 1 0 0 0-.18-.87A1 1 0 0 0 16 2H9a1 1 0 0 0-1 .74V3a1 1 0 0 0 .67 1.23m13 16.06-18-18a1 1 0 0 0-1.38 1.42L6.61 8l-1.26 4.74a1 1 0 0 0 .18.87 1 1 0 0 0 .79.39h3.84l-1.81 6.74a1 1 0 0 0 1.71.93l4.85-5.34 5.38 5.38a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM7.62 12l.63-2.34L10.59 12zm3.73 5.28 1-3.56 1.2 1.19z"
    />
  </svg>
);
export default SvgBoltSlash;
