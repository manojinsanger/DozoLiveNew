import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SettingIcon = (props: any) => (
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
      d="M17.196 5L20.66 11C21.017 11.619 21.017 12.381 20.66 13L17.196 19C16.839 19.619 16.178 20 15.464 20H8.53602C7.82102 20 7.16102 19.619 6.80402 19L3.34002 13C2.98302 12.381 2.98302 11.619 3.34002 11L6.80402 5C7.16102 4.381 7.82202 4 8.53602 4H15.465C16.179 4 16.839 4.381 17.196 5Z"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1213 9.87868C15.2929 11.0503 15.2929 12.9498 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0503 8.70711 12.9498 8.70711 14.1213 9.87868"
      stroke="#8287FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SettingIcon;
