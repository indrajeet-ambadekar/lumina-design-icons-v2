import * as React from "react";
const SvgClub = ({ title, titleId, ...props }) => (
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
      d="M21 12.5a5.52 5.52 0 0 0-3.51-5.12 5.5 5.5 0 0 0-11 0A5.5 5.5 0 0 0 8.5 18h.2a6.9 6.9 0 0 1-1.24 2.39A1 1 0 0 0 8.24 22h7.52a1 1 0 0 0 .78-1.63A6.9 6.9 0 0 1 15.3 18h.2a5.51 5.51 0 0 0 5.5-5.5M10.06 20c.398-.807.671-1.67.81-2.56a5.5 5.5 0 0 0 1.13-.7c.347.278.726.514 1.13.7.139.89.412 1.753.81 2.56zm2.72-5.3-.08-.08-.08-.08h-.07l-.18-.09-.18-.06h-.38l-.18.06a.6.6 0 0 0-.17.09h-.08l-.08.08-.08.08a3.5 3.5 0 1 1-3.47-5.62q.085-.034.16-.08.093-.034.18-.08a1 1 0 0 0 .14-.13.62.62 0 0 0 .21-.31.6.6 0 0 0 .07-.17.7.7 0 0 0 0-.2 1 1 0 0 0 0-.17q-.015-.225 0-.45a3.5 3.5 0 0 1 7 0q.015.225 0 .45a1 1 0 0 0 0 .16q-.015.105 0 .21a.6.6 0 0 0 .07.17.62.62 0 0 0 .21.31 1 1 0 0 0 .14.13q.087.046.18.08.078.04.16.07a3.5 3.5 0 1 1-3.47 5.62z"
    />
  </svg>
);
export default SvgClub;
