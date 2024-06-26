import * as React from "react";
const SvgMetro = ({ title, titleId, ...props }) => (
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
      d="M8.71 14.29a1 1 0 0 0-1.09-.21.9.9 0 0 0-.54.54 1 1 0 1 0 1.84 0 1.2 1.2 0 0 0-.21-.33m8 0a1.046 1.046 0 0 0-1.42 0q-.133.147-.21.33a.99.99 0 0 0 .21 1.09q.147.133.33.21a.94.94 0 0 0 .76 0q.183-.077.33-.21a.99.99 0 0 0 .21-1.09 1.2 1.2 0 0 0-.21-.33m2.6 4.605a4.97 4.97 0 0 0 1.784-4.817l-1.5-8A5 5 0 0 0 14.68 2H9.319a5 5 0 0 0-4.913 4.078l-1.5 8a4.97 4.97 0 0 0 1.785 4.817l-1.398 1.398a1 1 0 1 0 1.414 1.414l1.87-1.87c.405.107.823.161 1.242.163h8.362q.632-.003 1.243-.162l1.869 1.869a1 1 0 0 0 1.414-1.414zM6.37 6.447A3 3 0 0 1 9.32 4h5.362a3 3 0 0 1 2.948 2.447l.347 1.85a7.955 7.955 0 0 1-11.952 0zm12.117 10.469A2.99 2.99 0 0 1 16.181 18H7.819a3 3 0 0 1-2.948-3.553l.711-3.792a9.955 9.955 0 0 0 12.836 0l.71 3.792a2.99 2.99 0 0 1-.64 2.469"
    />
  </svg>
);
export default SvgMetro;
