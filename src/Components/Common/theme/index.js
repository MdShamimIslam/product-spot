import HoverCard from "./HoverCard";
import SidePanel from "./SidePanel";
import Simple from "./Simple";
import { TippyHotspots } from "./TippyHotspot";


const  Theme = (props) => {
	const { attributes } = props;
	const { themeSl = 'simple' } = attributes || {};

	return <ThemeSwitch themeSl={themeSl} {...props} />
}
export default Theme;

const ThemeSwitch = ({ themeSl, ...props }) => {
	switch (themeSl) {
		case 'sidepanel':
			return <SidePanel {...props} />
		case 'tippy':
			return <TippyHotspots {...props} />
		case 'hoverCard':
			return <HoverCard {...props} />

		default:
			return <Simple {...props} />;
	}
}