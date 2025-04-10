import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";
const RewardIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={24} height={24} rx={6} fill="#FFE7E7" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.13965 5.3322C6.13965 4.04416 7.18381 3 8.47184 3H8.77084C10.0868 3 11.2568 3.62512 12 4.59462C12.7432 3.62512 13.9132 3 15.2292 3H15.5282C16.8162 3 17.8604 4.04416 17.8604 5.3322C17.8604 6.01223 17.668 6.64733 17.3347 7.18604H17.4644H17.4645H17.4645C17.8365 7.18603 18.1491 7.18602 18.404 7.2045C18.6686 7.22369 18.9255 7.26543 19.1703 7.3785C19.4475 7.50656 19.6953 7.69869 19.8758 7.9488C20.0464 8.18514 20.1101 8.43974 20.1378 8.68429C20.1628 8.90569 20.1628 9.17116 20.1628 9.45821V9.51845C20.1628 9.51487 20.1628 9.78035 20.1378 10.0017C20.1101 10.2463 20.0464 10.5009 19.8758 10.7372C19.6953 10.9873 19.4475 11.1795 19.1703 11.3075C18.9255 11.4206 18.6686 11.4623 18.404 11.4815C18.1491 11.5 17.8365 11.5 17.4645 11.5H17.4644H17.4644H6.53576H6.53575H6.53573C6.16371 11.5 5.8511 11.5 5.5962 11.4815C5.33163 11.4623 5.07472 11.4206 4.82992 11.3075C4.55266 11.1795 4.3049 10.9873 4.1244 10.7372C3.95383 10.5009 3.89013 10.2463 3.86243 10.0017C3.83735 9.78034 3.83737 9.51487 3.8374 9.51845V9.45822C3.83737 9.17117 3.83735 8.90569 3.86243 8.68429C3.89013 8.43974 3.95383 8.18514 4.1244 7.9488C4.3049 7.69869 4.55266 7.50656 4.82992 7.3785C5.07472 7.26543 5.33163 7.22369 5.5962 7.2045C5.8511 7.18602 6.16371 7.18603 6.53572 7.18604H6.53573H6.53574H6.66536C6.33204 6.64733 6.13965 6.01223 6.13965 5.3322ZM12.8372 7.06639V7.18599H14.3322C15.356 7.18599 16.186 6.35602 16.186 5.3322C16.186 4.9689 15.8915 4.6744 15.5282 4.6744H15.2292C13.9117 4.6744 12.8431 5.73948 12.8372 7.05556L12.8372 7.06639ZM8.77084 4.6744C10.0883 4.6744 11.157 5.73948 11.1628 7.05556L11.1628 7.06639V7.18599H9.66784C8.64402 7.18599 7.81405 6.35602 7.81405 5.3322C7.81405 4.9689 8.10855 4.6744 8.47184 4.6744H8.77084ZM7.86421 20.8857C8.43325 20.9622 9.10834 20.9869 9.90192 20.9948V21.001C9.90192 21.0267 9.92281 21.0476 9.94858 21.0476C11.2903 21.0476 15.2966 20.9986 16.1364 20.8857C17.0039 20.7691 17.7184 20.5217 18.2836 19.9564C18.8489 19.3912 19.0963 18.6767 19.2129 17.8092C19.3258 16.9694 19.326 15.3417 19.3259 14V12.5647C19.3259 12.359 19.3259 12.2562 19.2666 12.206C19.2073 12.1559 19.0971 12.1744 18.8766 12.2116C18.7352 12.2354 18.6017 12.2489 18.48 12.2577C18.1869 12.279 17.8421 12.279 17.4932 12.2789L13.3238 12.3071C13.2808 12.2641 11.514 12.2749 10.9746 12.2782H10.9745H10.9745L10.895 12.2786L10.8488 12.2789L10.8284 12.2789H6.50769C6.15886 12.279 5.81402 12.279 5.52088 12.2577C5.39918 12.2489 5.26568 12.2354 5.12436 12.2116C4.90387 12.1745 4.79362 12.1559 4.73429 12.206C4.67497 12.2562 4.67497 12.359 4.67497 12.5647V14V14.0057C4.67496 15.3463 4.67494 16.9706 4.78768 17.8092C4.90433 18.6767 5.15172 19.3912 5.71695 19.9564C6.28217 20.5217 6.99665 20.7691 7.86421 20.8857Z"
      fill="url(#paint0_linear_2043_94318)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2046 15C14.0796 15 14.6663 15.7915 14.6663 16.529C14.6663 18.0703 12.6767 19.2515 12.1858 19.2515C11.695 19.2515 9.70605 18.0703 9.70605 16.529C9.70605 15.7915 10.2928 15 11.1678 15C11.6679 15 11.9957 15.2404 12.1866 15.4553C12.3767 15.2404 12.7045 15 13.2046 15Z"
      fill="white"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2043_94318"
        x1={5}
        y1={3.5}
        x2={19.5}
        y2={20.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FB85A2" />
        <Stop offset={1} stopColor="#CF3C60" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default RewardIcon;
