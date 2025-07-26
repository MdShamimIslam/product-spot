import { RichText } from '@wordpress/block-editor';
import { updateHotspotField } from '../../../utils/functions';

const Description = ({ selectedHotspot = {}, setAttributes = () => { }, hotspots = [] }) => {
    const { id, description } = selectedHotspot;

    return (
        <RichText
            tagName="p"
            value={description}
            onChange={(val) => updateHotspotField(hotspots, setAttributes, id, 'description', val)}
            className="desc"
        />
    )
}

export default Description;