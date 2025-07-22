import SidePanel from "./SidePanel";
import Simple from "./Simple";


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

		default:
			return <Simple {...props} />;
	}
}