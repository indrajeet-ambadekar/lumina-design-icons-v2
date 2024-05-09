import * as React from "react";
const SvgIpad = ({ title, titleId, ...props }) => (
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
      d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-5.29-2.71a1 1 0 0 0-.91-.29l-.18.06a.8.8 0 0 0-.18.09l-.15.12a1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09q.15.133.33.22A1 1 0 0 0 13 17a.84.84 0 0 0-.08-.38 1.2 1.2 0 0 0-.21-.33"
    />
  </svg>
);
export default SvgIpad;
