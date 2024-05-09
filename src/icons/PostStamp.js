import * as React from "react";
const SvgPostStamp = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#post-stamp_svg__a)">
      <path
        fill="#000"
        d="M22.5 5.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1 .5.5 0 1 1-1 0 1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 1 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 .5.5 0 0 1 1 0 1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1 1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1 1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1 .5.5 0 0 1 0-1m-1-1.79a2.5 2.5 0 0 0 0 4.58v1.42a2.5 2.5 0 0 0 0 4.58v1.42a2.5 2.5 0 0 0 0 4.58v1.21h-1.21a2.5 2.5 0 0 0-4.58 0h-1.42a2.5 2.5 0 0 0-4.58 0H8.29a2.5 2.5 0 0 0-4.58 0H2.5v-1.21a2.5 2.5 0 0 0 0-4.58v-1.42a2.5 2.5 0 0 0 0-4.58V8.29a2.5 2.5 0 0 0 0-4.58V2.5h1.21a2.5 2.5 0 0 0 4.58 0h1.42a2.5 2.5 0 0 0 4.58 0h1.42a2.5 2.5 0 0 0 4.58 0h1.21zM12 5a7 7 0 1 0 3.5 13.06 1 1 0 1 0-1-1.73A5 5 0 1 1 17 12v.5a.83.83 0 0 1-.83.83.84.84 0 0 1-.84-.83V9.67a1 1 0 0 0-1.78-.6 3.25 3.25 0 0 0-1.55-.4 3.33 3.33 0 1 0 0 6.66c.8 0 1.57-.291 2.17-.82a2.84 2.84 0 0 0 4.83-2V12a7 7 0 0 0-7-7m0 8.33A1.33 1.33 0 1 1 13.33 12 1.32 1.32 0 0 1 12 13.33"
      />
    </g>
    <defs>
      <clipPath id="post-stamp_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPostStamp;
