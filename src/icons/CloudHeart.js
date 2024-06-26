import * as React from "react";
const SvgCloudHeart = ({ title, titleId, ...props }) => (
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
      d="M18.42 7.72A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66q.155.048.32.05a1.013 1.013 0 1 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1.003 1.003 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78M12 12.83a2.94 2.94 0 0 0-3.43.53 2.93 2.93 0 0 0 0 4.13l2.72 2.72a1 1 0 0 0 1.42 0l2.72-2.72a2.93 2.93 0 0 0 0-4.13 2.94 2.94 0 0 0-3.43-.53m2 3.24-2 2-2-2a.88.88 0 0 1-.27-.65.9.9 0 0 1 .27-.65.92.92 0 0 1 1.3 0 1 1 0 0 0 1.42 0 .94.94 0 0 1 1.3 0 .89.89 0 0 1-.02 1.3"
    />
  </svg>
);
export default SvgCloudHeart;
