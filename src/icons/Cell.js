import * as React from "react";
const SvgCell = ({ title, titleId, ...props }) => (
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
      d="M21.49 4.73 17 2.17a1 1 0 0 0-1 0l-4 2.28-4-2.28a1 1 0 0 0-1 0L2.51 4.73A1 1 0 0 0 2 5.6v5.12a1 1 0 0 0 .51.87l4 2.27v4.54a1 1 0 0 0 .51.87l4.5 2.56a1 1 0 0 0 1 0L17 19.27a1 1 0 0 0 .51-.87v-4.54l4-2.27a1 1 0 0 0 .51-.87V5.6a1 1 0 0 0-.53-.87M4 10.14v-4l3.5-2 3.5 2v4l-3.5 2zm11.5 7.68-3.5 2-3.5-2v-4l3.5-2 3.5 2zm4.5-7.68-3.5 2-3.5-2v-4l3.5-2 3.5 2z"
    />
  </svg>
);
export default SvgCell;
