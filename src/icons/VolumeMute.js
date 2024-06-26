import * as React from "react";
const SvgVolumeMute = ({ title, titleId, ...props }) => (
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
      d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08zM19.91 12l1.8-1.79a1.005 1.005 0 0 0-1.42-1.42l-1.79 1.8-1.79-1.8a1.004 1.004 0 0 0-1.42 1.42l1.8 1.79-1.8 1.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l1.79-1.8 1.79 1.8a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
    />
  </svg>
);
export default SvgVolumeMute;
