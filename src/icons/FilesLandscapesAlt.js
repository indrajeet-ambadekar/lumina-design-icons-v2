import * as React from "react";
const SvgFilesLandscapesAlt = ({ title, titleId, ...props }) => (
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
      d="M18 19H6a3 3 0 0 1-3-3V8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h12a1 1 0 0 0 0-2m-4-8h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m9-1.06a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19h-.09a.9.9 0 0 0-.33-.11H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.94m-6-3.53L19.59 9H18a1 1 0 0 1-1-1zM21 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3zM10 9h2a1 1 0 1 0 0-2h-2a1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgFilesLandscapesAlt;
