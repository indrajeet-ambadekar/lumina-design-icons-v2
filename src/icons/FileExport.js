import * as React from "react";
const SvgFileExport = ({ title, titleId, ...props }) => (
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
      d="M20.92 15.62a1.2 1.2 0 0 0-.21-.33l-3-3a1.004 1.004 0 1 0-1.42 1.42l1.3 1.29H12a1 1 0 0 0 0 2h5.59l-1.3 1.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a.9.9 0 0 0 .21-.33 1 1 0 0 0 0-.76M14 20H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09l-6-6a1 1 0 0 0-.28-.19h-.09l-.28-.1H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a1 1 0 0 0 0-2M13 5.41 15.59 8H14a1 1 0 0 1-1-1z"
    />
  </svg>
);
export default SvgFileExport;
