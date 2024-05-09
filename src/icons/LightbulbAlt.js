import * as React from "react";
const SvgLightbulbAlt = ({ title, titleId, ...props }) => (
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
      d="M17.09 2.82a8 8 0 0 0-6.68-1.66 8 8 0 0 0-6.27 6.32 8.07 8.07 0 0 0 1.72 6.65A4.54 4.54 0 0 1 7 17v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.81A5.17 5.17 0 0 1 18.22 14a8 8 0 0 0-1.13-11.2zM15 20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h6zm1.67-7.24A7.13 7.13 0 0 0 15 17h-2v-3a1 1 0 1 0-2 0v3H9a6.5 6.5 0 0 0-1.6-4.16 6 6 0 0 1 3.39-9.72A6 6 0 0 1 18 9a5.9 5.9 0 0 1-1.33 3.76"
    />
  </svg>
);
export default SvgLightbulbAlt;
