import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';

registerBlockType(metadata, {
	icon: {
		src: 'products', 
		foreground: '#4527a4'
	},
	edit: Edit,
});