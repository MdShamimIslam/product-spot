import { RichText } from '@wordpress/block-editor';

const TitleDesBack = ({ selectedHotspot: { id, title, description }, setAttributes, hotspots }) => {

    const updateHotspotField = (hotspotId, field, value) => {
        const updatedHotspots = hotspots.map(h =>
            h.id === hotspotId ? { ...h, [field]: value } : h
        );
        setAttributes({ hotspots: updatedHotspots });
        
    };

    return (
        <div className="info">
            <RichText
                tagName="h3"
                value={title}
                onChange={(val) => updateHotspotField(id, 'title', val)}
                className="title"
            />
            <RichText
                tagName="p"
                value={description}
                 onChange={(val) => updateHotspotField(id, 'description', val)}
                className="desc"
            />

        </div>
    )
}

export default TitleDesBack;