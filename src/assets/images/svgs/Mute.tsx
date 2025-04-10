import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';


const Mute: React.FC<SvgProps> = ({ width = 20, height = 20 }) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            fill="#fff"
            width={width}
            height={height}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
        </Svg>
    );
};

export default Mute;
