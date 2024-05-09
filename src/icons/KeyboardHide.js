import * as React from "react";
const SvgKeyboardHide = ({ title, titleId, ...props }) => (
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
      d="M6.71 10.29a1.2 1.2 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09q.147.133.33.21a1 1 0 0 0 1.3-1.3 1 1 0 0 0-.21-.33m2.58-2.58a1 1 0 0 0 1.09.21 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.2 1.2 0 0 0-.21-.33 1 1 0 0 0-1.42 0 1.2 1.2 0 0 0-.21.33.94.94 0 0 0 0 .76q.077.183.21.33M6.71 6.29a1 1 0 0 0-1.63 1.09q.076.183.21.33a1 1 0 0 0 1.09.21 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.2 1.2 0 0 0-.21-.33m6.58 12L12 19.59l-1.29-1.3a1.004 1.004 0 0 0-1.42 1.42l2 2a1 1 0 0 0 1.42 0l2-2a1.004 1.004 0 1 0-1.42-1.42m5.42-12A1 1 0 0 0 17 7a.84.84 0 0 0 .08.38q.077.183.21.33a1 1 0 0 0 1.42 0 1.2 1.2 0 0 0 .21-.33A.84.84 0 0 0 19 7a1 1 0 0 0-.08-.38 1.2 1.2 0 0 0-.21-.33M14 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m6-8H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2.29-2.71a1 1 0 0 0-.33-.21.92.92 0 0 0-.76 0 1.2 1.2 0 0 0-.33.21A1.05 1.05 0 0 0 17 11a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33m-5.09-4.21a1.2 1.2 0 0 0-.33.21A1.05 1.05 0 0 0 13 7c.002.13.029.26.08.38q.077.183.21.33A1 1 0 0 0 14 8a.84.84 0 0 0 .38-.08 1.2 1.2 0 0 0 .33-.21 1.2 1.2 0 0 0 .21-.33A.84.84 0 0 0 15 7a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-1.09-.21"
    />
  </svg>
);
export default SvgKeyboardHide;
