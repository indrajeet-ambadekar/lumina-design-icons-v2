import * as React from "react";
const SvgCommentAltShield = ({ title, titleId, ...props }) => (
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
      d="M6.57 12a1 1 0 0 0 .58-.19l1.62-1.16A4.56 4.56 0 0 0 10.68 7V3.63a1 1 0 0 0-1.21-.97 3 3 0 0 1-2.33-.48 1 1 0 0 0-1.14 0 3 3 0 0 1-2.33.48 1 1 0 0 0-1.2 1V7a4.55 4.55 0 0 0 1.9 3.7L6 11.81a.94.94 0 0 0 .57.19M4.46 7V4.72a5.2 5.2 0 0 0 2.11-.55 5.1 5.1 0 0 0 2.11.55V7a2.57 2.57 0 0 1-1.07 2l-1 .74L5.53 9a2.57 2.57 0 0 1-1.07-2m14.08-1h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v9.72L18 17.27a.94.94 0 0 0-.68-.27H8.54a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 1.08.19 1 1 0 0 0 .59-.92V9a2.997 2.997 0 0 0-3.03-3"
    />
  </svg>
);
export default SvgCommentAltShield;
