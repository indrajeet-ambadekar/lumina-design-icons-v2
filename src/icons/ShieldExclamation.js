import * as React from "react";
const SvgShieldExclamation = ({ title, titleId, ...props }) => (
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
      d="M12.92 15a.6.6 0 0 0-.09-.17l-.12-.15a1 1 0 0 0-1.54.15.6.6 0 0 0-.09.17.7.7 0 0 0-.06.19 1 1 0 0 0 0 .19.9.9 0 0 0 .08.39 1 1 0 0 0 1.3.54q.183-.082.33-.22.136-.139.21-.32c.053-.123.08-.256.08-.39a1 1 0 0 0 0-.19.7.7 0 0 0-.1-.19M12 7.36a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1m7.63-3.71a1 1 0 0 0-.84-.2 8 8 0 0 1-6.22-1.27 1 1 0 0 0-1.14 0 8 8 0 0 1-6.22 1.27A1 1 0 0 0 4 4.43v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78M18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39 10 10 0 0 0 6 1.39z"
    />
  </svg>
);
export default SvgShieldExclamation;
