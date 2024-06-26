import * as React from "react";
const SvgHourglass = ({ title, titleId, ...props }) => (
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
      d="M18.992 21.002h-1v-1.667a5 5 0 0 0-.3-1.678 1 1 0 0 0-.036-.084 5 5 0 0 0-.664-1.237l-1.4-1.867a3.02 3.02 0 0 1-.6-1.801v-1.01a3.02 3.02 0 0 1 .878-2.12l.657-.658a4.95 4.95 0 0 0 1.397-2.838c0-.014.008-.026.008-.04l-.003-.014q.052-.32.063-.643V3.002h1a1 1 0 1 0 0-2h-14a1 1 0 0 0 0 2h1v2.343q.01.323.063.643l-.003.014c0 .014.007.026.008.04A4.95 4.95 0 0 0 7.456 8.88l.657.657c.56.564.876 1.326.879 2.121v1.01a3.02 3.02 0 0 1-.6 1.8l-1.4 1.868a5 5 0 0 0-.665 1.237 1 1 0 0 0-.036.084 5 5 0 0 0-.3 1.678v1.667h-1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2m-11-16v-2h8v2zm.878 2.464a3 3 0 0 1-.377-.464h6.997a3 3 0 0 1-.377.464l-.657.657a4.96 4.96 0 0 0-1.422 2.879H10.95a4.96 4.96 0 0 0-1.422-2.879zm1.122 8.202c.579-.775.922-1.7.988-2.666h2.023c.066.965.41 1.89.989 2.666l1 1.334h-6zm6 5.334h-8v-1.667q.004-.167.027-.333h7.945q.024.166.028.333z"
    />
  </svg>
);
export default SvgHourglass;
