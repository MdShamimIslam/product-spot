import { RichText } from '@wordpress/block-editor';
import { updateHotspotField } from '../../../utils/functions';

const Title = ({ selectedHotspot = {}, setAttributes = () => { }, hotspots = [] }) => {
    const { id, title } = selectedHotspot;

    return (
        <RichText
            tagName="h3"
            value={title}
            onChange={(val) => updateHotspotField(hotspots, setAttributes, id, 'title', val)}
            className="title"
        />
    )
}

export default Title;