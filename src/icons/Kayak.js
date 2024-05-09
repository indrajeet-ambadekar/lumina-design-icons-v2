import * as React from "react";
const SvgKayak = ({ title, titleId, ...props }) => (
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
      d="M21.12 16.88a3 3 0 0 0-3.4-.58l-1.15-1.14a24 24 0 0 0 5.21-8.86 3.19 3.19 0 0 0-4.08-4.08 24 24 0 0 0-8.86 5.21L7.7 6.28a3 3 0 1 0-4.82.84A3 3 0 0 0 5 8a3 3 0 0 0 1.28-.3l1.15 1.14a24 24 0 0 0-5.21 8.86A3.24 3.24 0 0 0 3 21a3.17 3.17 0 0 0 2.22 1 3.7 3.7 0 0 0 1.08-.17 24 24 0 0 0 8.86-5.21l1.14 1.15a3.001 3.001 0 0 0 4.685 3.547 3 3 0 0 0 .135-4.387zM5.71 5.7a1 1 0 1 1-1.42-1.41A1 1 0 0 1 5.71 5.7m12.6-1.57a1.6 1.6 0 0 1 .47-.08 1.16 1.16 0 0 1 .83.34 1.23 1.23 0 0 1 .26 1.3 22 22 0 0 1-2.13 4.64l-4.07-4.07a22 22 0 0 1 4.64-2.13M5.69 19.87a1.2 1.2 0 0 1-1.56-1.56 22 22 0 0 1 2.13-4.64l4.07 4.07a22 22 0 0 1-4.64 2.13M12 16.59 7.41 12q.669-.908 1.43-1.74l4.91 4.91q-.837.757-1.75 1.42m3.15-2.84-4.9-4.91A21 21 0 0 1 12 7.41l4.6 4.6q-.674.908-1.44 1.74zm4.55 6a1 1 0 1 1-1.42-1.41 1 1 0 0 1 1.41 0 1 1 0 0 1 .02 1.37z"
    />
  </svg>
);
export default SvgKayak;
