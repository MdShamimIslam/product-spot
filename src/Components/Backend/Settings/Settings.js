import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = (settingprops) => {
	const { attributes, setAttributes } = settingprops;
	const { alignment } = attributes;

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel wp-block-b-blocks-test-purpose' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General {...settingprops} />}

						{'style' === tab.name && <Style {...settingprops} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Product Spot Alignment')} alignmentControls={[
				{ title: __('left', 'product-spot'), align: 'left', icon: 'align-left' },
				{ title: __('center', 'product-spot'), align: 'center', icon: 'align-center' },
				{ title: __('right', 'product-spot'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};
export default Settings;