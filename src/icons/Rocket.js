import * as React from "react";
const SvgRocket = ({ title, titleId, ...props }) => (
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
      d="M22.601 2.062a1 1 0 0 0-.713-.713A11.25 11.25 0 0 0 10.47 4.972L9.355 6.296 6.75 5.668a2.78 2.78 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659c-.26.792-.446 1.607-.555 2.434a1 1 0 0 0 .285.836l3.1 3.1a1 1 0 0 0 .794.29c.845-.077 1.68-.24 2.491-.49l.644 3.003a1 1 0 0 0 1.47.661l3.904-2.202a3.04 3.04 0 0 0 1.375-3.304l-.668-2.76 1.237-1.137A11.2 11.2 0 0 0 22.6 2.062M3.572 10.723l1.557-2.76a.826.826 0 0 1 1.07-.375l1.717.416-.65.772a13 13 0 0 0-1.59 2.398zm12.47 8.222-2.715 1.532-.43-2.005c.871-.434 1.682-.978 2.414-1.62l.743-.683.404 1.665a1.04 1.04 0 0 1-.415 1.111m1.615-6.965-3.685 3.386a9.77 9.77 0 0 1-5.17 2.305l-2.404-2.405a10.93 10.93 0 0 1 2.4-5.206l1.679-1.992a1 1 0 0 0 .078-.093L11.99 6.27a9.28 9.28 0 0 1 8.81-3.12 9.22 9.22 0 0 1-3.143 8.829m-.923-6.164a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
  </svg>
);
export default SvgRocket;
