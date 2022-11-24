import React from 'react'

function WinLine() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_2957_70679)">
        <path
          d="M11.765 16.6882C11.0122 18.1007 8.98777 18.1007 8.235 16.6882L1.17487 3.44063C0.464895 2.10844 1.4303 0.5 2.93987 0.5L17.0601 0.500001C18.5697 0.500002 19.5351 2.10844 18.8251 3.44064L11.765 16.6882Z"
          fill="url(#paint0_linear_2957_70679)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_2957_70679"
          x="0.9375"
          y="0.5"
          width="19.125"
          height="18.2476"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2957_70679"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2957_70679"
          x1="22"
          y1="20"
          x2="-5.88567"
          y2="14.7875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDB01B" />
          <stop offset="1" stopColor="#FBDE48" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WinLine
