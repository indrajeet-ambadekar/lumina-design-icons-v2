import * as React from "react";
const SvgCloudDrizzle = ({ title, titleId, ...props }) => (
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
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#cloud-drizzle_svg__a)"
    >
      <path d="M12 21v2M16 19v2M8 19v2M12 15v2M16 13v2M8 13v2M20 16.58A5 5 0 0 0 18 7h-1.26A7.998 7.998 0 0 0 2.063 5.005 8 8 0 0 0 4 15.25" />
    </g>
    <defs>
      <clipPath id="cloud-drizzle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudDrizzle;
