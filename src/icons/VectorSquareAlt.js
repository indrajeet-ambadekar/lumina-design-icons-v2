import * as React from "react";
const SvgVectorSquareAlt = ({ title, titleId, ...props }) => (
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
      d="M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-1 8H9V9h6zm6 3.28V5.72A2 2 0 1 0 18.28 3H5.72A2 2 0 1 0 3 5.72v12.56A2 2 0 1 0 5.72 21h12.56A2 2 0 1 0 21 18.28m-2 0c-.3.17-.55.42-.72.72H5.72c-.17-.3-.42-.55-.72-.72V5.72c.3-.17.55-.42.72-.72h12.56c.17.3.42.55.72.72z"
    />
  </svg>
);
export default SvgVectorSquareAlt;
