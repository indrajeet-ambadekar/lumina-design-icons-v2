import * as React from "react";
const SvgGoogle = ({ title, titleId, ...props }) => (
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
      d="M22.603 10.004a1 1 0 0 0-.984-.822H12.2a1 1 0 0 0-1 1v3.868a1 1 0 0 0 1 1h3.963c-.283.476-.67.882-1.132 1.187-.845.536-1.83.81-2.83.786a4.94 4.94 0 0 1-4.647-3.438v-.002a4.9 4.9 0 0 1 0-3.167v-.002A4.94 4.94 0 0 1 12.2 6.978a4.38 4.38 0 0 1 3.132 1.217 1 1 0 0 0 1.398-.015l2.868-2.868a1 1 0 0 0-.025-1.439A10.62 10.62 0 0 0 12.2 1a10.95 10.95 0 0 0-9.828 6.059l-.002.002A10.9 10.9 0 0 0 1.2 12a11.1 11.1 0 0 0 1.17 4.94l.002.001A10.95 10.95 0 0 0 12.2 23a10.53 10.53 0 0 0 7.295-2.687l.001-.001a10.78 10.78 0 0 0 3.304-8.085c0-.745-.065-1.49-.198-2.223M12.2 3a8.7 8.7 0 0 1 5.209 1.673l-1.454 1.453A6.46 6.46 0 0 0 12.2 4.978a6.89 6.89 0 0 0-5.99 3.55L5.143 7.7l-.585-.454A8.95 8.95 0 0 1 12.2 3M3.68 14.903a9.03 9.03 0 0 1 0-5.806l1.782 1.382a6.85 6.85 0 0 0 0 3.042zM12.2 21a8.95 8.95 0 0 1-7.643-4.246l.378-.294 1.276-.99a6.89 6.89 0 0 0 5.99 3.553 7.3 7.3 0 0 0 3.305-.751l1.692 1.313A8.9 8.9 0 0 1 12.2 21m6.526-2.76-.183-.143-1.377-1.069a5.6 5.6 0 0 0 1.4-2.795 1 1 0 0 0-.984-1.183H13.2v-1.868h7.549q.051.519.051 1.045a9.05 9.05 0 0 1-2.074 6.012"
    />
  </svg>
);
export default SvgGoogle;
