import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DiamondAgent = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8977 17.5949C21.064 17.8882 21.0247 18.2549 20.8002 18.5064L18.5444 21.0325C18.2788 21.3299 17.8989 21.4999 17.5001 21.4999C17.1014 21.4999 16.7215 21.3299 16.4559 21.0325L14.1995 18.5057C13.9753 18.2546 13.9361 17.8885 14.1021 17.5957L15.2593 15.5547C15.3836 15.3354 15.6162 15.1999 15.8682 15.2H19.132C19.3832 15.199 19.6155 15.3336 19.7395 15.5521L20.8977 17.5949Z"
      fill="#8287FF"
    />
    <Path
      d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 20C4 17.5 6 15.5 8.5 15.5H12.5"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DiamondAgent;
