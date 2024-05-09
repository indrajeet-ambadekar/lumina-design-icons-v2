import * as React from "react";
const SvgMapMarkerInfo = ({ title, titleId, ...props }) => (
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
      d="M12 10a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m8.46-.32A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83zm-3.86 5.37-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.5 6.5 0 0 1-1.87 5.24m-3.68-7.48a.6.6 0 0 0-.09-.17l-.12-.15A1 1 0 0 0 11.8 7h-.18l-.18.09-.15.13-.12.15a.6.6 0 0 0-.09.17.6.6 0 0 0-.06.19q-.025.134-.02.27a.9.9 0 0 0 .08.39q.076.178.21.32.144.14.33.22c.245.093.515.093.76 0a1.2 1.2 0 0 0 .33-.22q.133-.142.21-.32c.052-.123.08-.256.08-.39a1 1 0 0 0 0-.19.6.6 0 0 0-.08-.24"
    />
  </svg>
);
export default SvgMapMarkerInfo;
