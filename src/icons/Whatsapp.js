import * as React from "react";
const SvgWhatsapp = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#whatsapp_svg__a)">
      <path
        fill="#000"
        d="M14.512 11.982c-.247-.124-1.465-.724-1.692-.806-.227-.084-.392-.124-.557.123-.165.248-.64.806-.785.972-.144.164-.289.184-.536.06a6.8 6.8 0 0 1-1.991-1.227 7.5 7.5 0 0 1-1.378-1.716c-.144-.248-.015-.382.109-.505.111-.111.248-.29.371-.434q.153-.19.248-.413a.46.46 0 0 0-.021-.434c-.062-.124-.557-1.343-.763-1.84-.201-.481-.405-.416-.558-.424a10 10 0 0 0-.474-.01.9.9 0 0 0-.66.312 2.78 2.78 0 0 0-.867 2.065c.08.934.432 1.824 1.011 2.562a11.03 11.03 0 0 0 4.23 3.739q.693.297 1.412.521c.505.154 1.04.187 1.56.098a2.54 2.54 0 0 0 1.671-1.177c.162-.37.213-.78.144-1.178-.061-.104-.226-.165-.474-.288m2.492-9.08A9.913 9.913 0 0 0 1.406 14.862L0 19.995l5.254-1.376a9.9 9.9 0 0 0 4.736 1.206h.004a9.915 9.915 0 0 0 7.01-16.922m-2.633 13.99a8.24 8.24 0 0 1-4.377 1.259H9.99A8.2 8.2 0 0 1 5.798 17l-.301-.178-3.118.819.832-3.04-.195-.312a8.237 8.237 0 1 1 11.355 2.602"
      />
    </g>
    <defs>
      <clipPath id="whatsapp_svg__a">
        <path fill="#fff" d="M0 0h19.904v19.996H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWhatsapp;
