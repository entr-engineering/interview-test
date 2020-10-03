import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(1)">
          <path fill="#0B223C" d="M-1 0H59V60H-1z"></path>
          <g transform="translate(15 14)">
            <path
              fill="#FFF"
              d="M18.702 12.555c0-3.397-2.636-6.006-6.017-6.006-2.437 0-4.626 1.329-5.67 3.052v5.909c1.044 1.772 3.183 3.052 5.67 3.052 3.381 0 6.017-2.56 6.017-6.007m6.862 0c0 6.992-4.972 12.605-11.338 12.605-3.083 0-6.017-1.379-7.21-3.348v10.832H.002V.492h7.012v2.856C8.21 1.378 11.143 0 14.226 0c6.366 0 11.338 5.564 11.338 12.555"
            ></path>
            <ellipse
              cx="30.456"
              cy="20.639"
              fill="#FE7B6C"
              rx="4.478"
              ry="4.467"
            ></ellipse>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
