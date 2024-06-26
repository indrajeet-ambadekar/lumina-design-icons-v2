import * as React from "react";
const SvgAndroid = ({ title, titleId, ...props }) => (
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
      d="m14.975 3.019.96-1.732a.194.194 0 0 0-.075-.263.193.193 0 0 0-.263.076l-.97 1.75a6.54 6.54 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.55 5.55 0 0 0-3.093 4.876h12.137a5.55 5.55 0 0 0-3.093-4.876M9.2 5.674a.507.507 0 1 1 0-1.013.507.507 0 0 1 0 1.013m5.602 0a.507.507 0 1 1 0-1.014.507.507 0 0 1 0 1.014M5.93 17.172a1.467 1.467 0 0 0 1.467 1.467h.974v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.363 1.363 0 0 0 1.36 1.365 1.36 1.36 0 0 0 1.36-1.364v-3.001h.974a1.467 1.467 0 0 0 1.468-1.467V8.375H5.93zm-1.867-9.03a1.36 1.36 0 0 0-1.36 1.36v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.36 1.36 0 0 0-1.36-1.36m15.872 0a1.36 1.36 0 0 0-1.36 1.36v5.669a1.361 1.361 0 1 0 2.72 0V9.502a1.36 1.36 0 0 0-1.36-1.36"
    />
  </svg>
);
export default SvgAndroid;
