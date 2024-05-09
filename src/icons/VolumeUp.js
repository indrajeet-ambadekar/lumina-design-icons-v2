import * as React from "react";
const SvgVolumeUp = ({ title, titleId, ...props }) => (
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
      d="M12.43 4.1a1 1 0 0 0-1 .12L6.65 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.65l4.73 3.78A1 1 0 0 0 12 20a.9.9 0 0 0 .43-.1A1 1 0 0 0 13 19V5a1 1 0 0 0-.57-.9M11 16.92l-3.38-2.7A1 1 0 0 0 7 14H4v-4h3a1 1 0 0 0 .62-.22L11 7.08zm4.14-12.83a1.01 1.01 0 0 0-.28 2 6 6 0 0 1 0 11.86 1.003 1.003 0 0 0 .14 2h.14a8 8 0 0 0 0-15.82zm-.46 9.78a1.013 1.013 0 0 0 .32 2q.163-.002.32-.05a4 4 0 0 0 0-7.54 1.002 1.002 0 0 0-.64 1.9 2 2 0 0 1 0 3.74z"
    />
  </svg>
);
export default SvgVolumeUp;
