import * as React from "react";
const SvgTelescope = ({ title, titleId, ...props }) => (
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
      d="m21.9 7.59-1-3.87a3 3 0 0 0-3.71-2.12l-1.93.52a1 1 0 0 0-.71 1.23l.26 1L4.19 7.16a1 1 0 0 0-.71 1.22l.26 1-1 .26a1.008 1.008 0 1 0 .25 2q.13.015.26 0l1-.27.26 1a1 1 0 0 0 .46.6 1 1 0 0 0 .5.14.8.8 0 0 0 .26 0L9 12.08v.42c0 .444.104.882.3 1.28l-5 5a1 1 0 1 0 1.41 1.42l5-5 .28.11v6.19a1 1 0 0 0 2 0v-6.18q.15-.051.29-.12l5 5a1 1 0 1 0 1.41-1.42l-5-5c.194-.4.3-.836.31-1.28v-2l1.35-.36.25 1a1 1 0 0 0 1 .74h.26l1.93-.52a3 3 0 0 0 2.11-3.77M13 12.5a1 1 0 0 1-.28.69 1 1 0 0 1-.69.28 1 1 0 0 1-.7-.29 1 1 0 0 1-.29-.7v-1L13 11zm-6.81-1.74-.52-1.93 9.66-2.59.26 1 .26 1zm13.68-1.9a1 1 0 0 1-.61.47l-1 .26-.78-2.9L17 4.76l-.26-1 1-.26a1 1 0 0 1 1.23.71l1 3.87a1 1 0 0 1-.1.78"
    />
  </svg>
);
export default SvgTelescope;
