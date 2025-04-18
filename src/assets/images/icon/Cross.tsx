import Svg, { Path, Rect } from "react-native-svg";

interface componentNameProps { }

const Cross = (props: componentNameProps) => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Rect opacity="0.25" x="0.958984" y="0.279785" width="24" height="24" rx="12" fill="#1F1F1F" />
            <Path d="M7.555 7.64544C7.34641 7.43048 7.34641 7.08868 7.555 6.87372C7.76995 6.66514 8.11176 6.66514 8.32671 6.87372L12.957 11.509L17.5953 6.87372C17.81 6.67317 18.1453 6.67976 18.352 6.88861C18.5587 7.09745 18.5618 7.4328 18.359 7.64544L13.7287 12.2767L18.359 16.915C18.5618 17.1276 18.5587 17.463 18.352 17.6718C18.1453 17.8807 17.81 17.8873 17.5953 17.6867L12.957 13.0484L8.32671 17.6867C8.11176 17.8953 7.76995 17.8953 7.555 17.6867C7.34641 17.4717 7.34641 17.1299 7.555 16.915L12.1883 12.2767L7.555 7.64544Z" fill="white" />
        </Svg>
    );
};

export default Cross;
