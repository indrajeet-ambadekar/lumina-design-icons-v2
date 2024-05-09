import * as React from "react";
const SvgVideoSlash = ({ title, titleId, ...props }) => (
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
      d="m7.71 6.29-4-4a1.004 1.004 0 1 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h9a3 3 0 0 0 1.9-.69l4.39 4.4a1 1 0 0 0 1.095.219 1 1 0 0 0 .325-.22 1 1 0 0 0 0-1.42zM14 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l7.87 7.88A1 1 0 0 1 14 16m7.53-8.85a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6h-1.34a1 1 0 1 0 0 2H14a1 1 0 0 1 1 1v1.5a2 2 0 0 0 0 .19.7.7 0 0 0 .05.2s.05.06.07.1q.06.115.15.21s.1.06.15.1l.17.11q.115.015.23 0a.7.7 0 0 0 .14 0q.095.006.19 0a.7.7 0 0 0 .2-.05L20 9.62v5.72a1 1 0 1 0 2 0V8a1 1 0 0 0-.47-.85"
    />
  </svg>
);
export default SvgVideoSlash;
