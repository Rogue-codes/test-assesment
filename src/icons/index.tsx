export type TIconProps = React.SVGProps<SVGSVGElement>;
export const Icons = {
  check: (props: TIconProps) => (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.7177 1L4.66177 9.05589L1 5.39412"
        stroke="#399649"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  plus: (props: TIconProps) => (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_243_231)">
        <path
          d="M17.9141 8.27148V11.3301H0.371094V8.27148H17.9141ZM10.7773 0.800781V19.4336H7.52539V0.800781H10.7773Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_243_231"
          x="0.371094"
          y="0.800781"
          width="17.543"
          height="20.6328"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_243_231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_243_231"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
};
