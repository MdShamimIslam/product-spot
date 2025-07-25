import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Theme from './Components/Common/theme';
import Hotspot from './Components/frontend/Hotspot/Hotspot';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-psb-product-spot');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className="productSpotWrapper">
				<div className="productSpot">
				<Theme {...{ attributes, isBackend: false, Hotspot }} />
				</div>
			</div>

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});