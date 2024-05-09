import * as React from "react";
const SvgShoppingTrolley = ({ title, titleId, ...props }) => (
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
      d="M21 16H7a1 1 0 0 1 0-2h10.44a3 3 0 0 0 2.91-2.27L22 5.24a1 1 0 0 0-.18-.86A1 1 0 0 0 21 4H6.76a3 3 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.94a1 1 0 0 1 1 .76l.06.48L6.73 12A3.003 3.003 0 1 0 7 18h.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.64 0H21a1 1 0 0 0 0-2M19.72 6l-1.31 5.24a1 1 0 0 1-1 .76H8.78l-1.5-6zM10 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
    />
  </svg>
);
export default SvgShoppingTrolley;
