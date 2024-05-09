import * as React from "react";
const SvgSick = ({ title, titleId, ...props }) => (
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
      d="M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m.27 3.2a1 1 0 0 0-1.2 0l-.74.55-.73-.55a1 1 0 0 0-1.2 0l-.73.55-.74-.55a1 1 0 0 0-1.2 0l-1.33 1a1 1 0 0 0 1.2 1.6l.73-.55.74.55.12.06a.8.8 0 0 0 .22.08h.12q.125.015.25 0h.1a1.1 1.1 0 0 0 .34-.16l.73-.55.73.55a1 1 0 0 0 1 .11l.1-.05a.4.4 0 0 0 .11-.06l.74-.55.73.55a1 1 0 0 0 1.2-1.6zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"
    />
  </svg>
);
export default SvgSick;
