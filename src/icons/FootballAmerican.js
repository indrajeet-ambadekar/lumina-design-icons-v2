import * as React from "react";
const SvgFootballAmerican = ({ title, titleId, ...props }) => (
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
      d="M21.84 5.56a4.08 4.08 0 0 0-1.14-2.25 4.08 4.08 0 0 0-2.25-1.14 13.7 13.7 0 0 0-5.29.24 1 1 0 0 0-.2.06 14.44 14.44 0 0 0-6.69 3.8A14.6 14.6 0 0 0 2.45 13c0 .06 0 .12-.05.19a13.7 13.7 0 0 0-.24 5.3 4.08 4.08 0 0 0 3.39 3.34q1.033.168 2.08.17c1.099-.006 2.193-.144 3.26-.41h.14a14.54 14.54 0 0 0 10.52-10.5c0-.06 0-.12.05-.19a13.7 13.7 0 0 0 .24-5.34M16.37 4q.886-.004 1.76.14.123.025.24.07L17 5.59l-1.54-1.54c.3-.05.61-.05.91-.05m-8.7 3.67a12.7 12.7 0 0 1 5.4-3.19L15.59 7l-2.15 2.15-.73-.73a1 1 0 1 0-1.42 1.41l.73.73L10.56 12l-.73-.73a1 1 0 1 0-1.41 1.42l.73.73L7 15.59l-2.51-2.51a12.7 12.7 0 0 1 3.18-5.41m-3.46 10.7a2 2 0 0 1-.07-.24A11.4 11.4 0 0 1 4 15.46L5.59 17zm1.66 1.49a2 2 0 0 1-.24-.07L7 18.41 8.54 20c-.893.058-1.789.012-2.67-.14m10.46-3.53a12.7 12.7 0 0 1-5.41 3.18L8.41 17l2.15-2.15.73.73a1.001 1.001 0 0 0 1.42-1.41l-.71-.73L13.44 12l.73.73A1 1 0 0 0 15.8 12.4a1 1 0 0 0-.221-1.089l-.73-.73L17 8.41l2.51 2.51a12.7 12.7 0 0 1-3.18 5.41M20 8.54 18.41 7l1.38-1.37q.045.117.07.24c.151.882.198 1.778.14 2.67"
    />
  </svg>
);
export default SvgFootballAmerican;
