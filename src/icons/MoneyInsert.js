import * as React from "react";
const SvgMoneyInsert = ({ title, titleId, ...props }) => (
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
      d="m10.46 6 .54-.59V9a1 1 0 0 0 2 0V5.41l.54.55A1 1 0 0 0 15 6a1 1 0 0 0 0-1.42l-2.29-2.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21L9 4.54A1.032 1.032 0 1 0 10.46 6M12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-7-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0m14 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1-7h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3"
    />
  </svg>
);
export default SvgMoneyInsert;
