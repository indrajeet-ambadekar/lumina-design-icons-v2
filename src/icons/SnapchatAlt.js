import * as React from "react";
const SvgSnapchatAlt = ({ title, titleId, ...props }) => (
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
      d="M21.951 15.614a4.72 4.72 0 0 1-2.982-2.173 1 1 0 1 0-1.656 1.122 7.7 7.7 0 0 0 2.403 2.334q-.202.038-.442.075a1.37 1.37 0 0 0-1.076 1.207 6 6 0 0 0-2.015-.004c-.719.159-1.39.486-1.958.956a3.5 3.5 0 0 1-2.103.871h-.26a3.5 3.5 0 0 1-2.106-.873 4.6 4.6 0 0 0-1.93-.95 6.4 6.4 0 0 0-2.039.005 1.37 1.37 0 0 0-1.063-1.21 13 13 0 0 1-.434-.075c.68-.393 1.287-.9 1.795-1.499q.352-.408.635-.868a1 1 0 0 0-1.696-1.06 5 5 0 0 1-.448.616 4.25 4.25 0 0 1-2.553 1.528 1.224 1.224 0 0 0-1.032 1.236c0 .184.039.366.115.533.316.716 1.156 1.168 2.784 1.474l.032.13c.028.119.057.239.091.348a1.29 1.29 0 0 0 1.279.945q.306-.008.602-.087a4.7 4.7 0 0 1 1.59-.046c.414.123.797.334 1.122.618a5.4 5.4 0 0 0 3.255 1.235h.26a5.44 5.44 0 0 0 3.274-1.248 2.9 2.9 0 0 1 1.132-.61 3.5 3.5 0 0 1 .624-.052q.484 0 .955.106.305.057.615.064a1.256 1.256 0 0 0 1.246-.923q.055-.183.094-.354l.032-.124c1.624-.306 2.466-.755 2.767-1.44a1.2 1.2 0 0 0 .127-.48 1.244 1.244 0 0 0-1.036-1.327m-18.15-4.466a1 1 0 0 0 1.057-.484c.396.202.83.317 1.275.338.47.006.925-.173 1.265-.499a1 1 0 0 0 .317-.79l-.036-.602a9.9 9.9 0 0 1 .156-3.561A4.26 4.26 0 0 1 11.8 3.006l.387-.004a4.26 4.26 0 0 1 3.96 2.547 9.9 9.9 0 0 1 .157 3.564l-.01.163-.028.444a1.03 1.03 0 0 0 .313.778c.337.325.786.505 1.254.503a3.3 3.3 0 0 0 1.241-.365 1 1 0 0 0 .916.599h.018a1 1 0 0 0 .982-1.018 1.64 1.64 0 0 0-1.186-1.451 1.91 1.91 0 0 0-1.476.01 9.5 9.5 0 0 0-.355-4.042 6.24 6.24 0 0 0-5.795-3.732l-.393.004a6.22 6.22 0 0 0-5.777 3.73 9.6 9.6 0 0 0-.352 4.094l-.111-.052a1.91 1.91 0 0 0-2.537 1.199 1 1 0 0 0 .793 1.172"
    />
  </svg>
);
export default SvgSnapchatAlt;
