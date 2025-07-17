import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';


const Style = ({ attributes, id, device="desktop" }) => {
	const { alignment, styles } = attributes || {};
	const { width } = styles || {};

	const mainSl = `#${id}`;
	const productSpotWrapperSl = `${mainSl} .productSpotWrapper`;
	const productSpotSl = `${productSpotWrapperSl} .productSpot`;


	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${productSpotWrapperSl} {
			justify-content: ${alignment};
		}

		${productSpotSl} {
			width: ${width[device]};
		}


		${tabBreakpoint}{
			${productSpotSl} {
				width: ${width.tablet};
			}
		}


		${mobileBreakpoint}{
			${productSpotSl} {
				width: ${width.mobile};
			}
		}
		

	`}} />;
}
export default Style;