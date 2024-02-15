import {styles} from "@features/styles";

export default function Icon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className={styles.iconSize}>
      <title>GitHub Brand</title>
      <g filter="url(#filter0_i_44_44)">
        <path d="M24 0C10.74 0 0 10.74 0 24C0 34.62 6.87 43.59 16.41 46.77C17.61 46.98 18.06 46.26 18.06 45.63C18.06 45.06 18.03 43.17 18.03 41.16C12 42.27 10.44 39.69 9.96 38.34C9.69 37.65 8.52 35.52 7.5 34.95C6.66 34.5 5.46 33.39 7.47 33.36C9.36 33.33 10.71 35.1 11.16 35.82C13.32 39.45 16.77 38.43 18.15 37.8C18.36 36.24 18.99 35.19 19.68 34.59C14.34 33.99 8.76 31.92 8.76 22.74C8.76 20.13 9.69 17.97 11.22 16.29C10.98 15.69 10.14 13.23 11.46 9.93C11.46 9.93 13.47 9.3 18.06 12.39C19.98 11.85 22.02 11.58 24.06 11.58C26.1 11.58 28.14 11.85 30.06 12.39C34.65 9.27 36.66 9.93 36.66 9.93C37.98 13.23 37.14 15.69 36.9 16.29C38.43 17.97 39.36 20.1 39.36 22.74C39.36 31.95 33.75 33.99 28.41 34.59C29.28 35.34 30.03 36.78 30.03 39.03C30.03 42.24 30 44.82 30 45.63C30 46.26 30.45 47.01 31.65 46.77C36.4147 45.162 40.555 42.1 43.4881 38.0153C46.4211 33.9305 47.9992 29.0287 48 24C48 10.74 37.26 0 24 0Z" fill="currentColor"/>
      </g>
      <defs>
        <filter id="filter0_i_44_44" x="0" y="0" width="48" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_44_44"/>
        </filter>
      </defs>
    </svg>
  );
}