import { Plus } from "lucide-react";
import Draggable from "react-draggable";
import Title from "../TtitleDesBack/Title";
import Description from "../TtitleDesBack/Description";

const HoverCardDraggble = ({ hotspot, containerSize, handleStop, activeHotspot, setActiveHotspot, handleDeleteHotspot, selectedHotspot, setAttributes, hotspots }) => {
    return (
        <Draggable
            position={{
                x: (hotspot.x / 100) * containerSize.width - 12,
                y: (hotspot.y / 100) * containerSize.height - 12
            }}
            bounds=".image"
            onStop={(e, data) => handleStop(e, data, hotspot.id)}
        >
            <div
                className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
            >
                <Plus className="icon" />
                <span
                    className="deleteIcon"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteHotspot(hotspot.id);
                    }}
                >
                    x
                </span>

                {activeHotspot === hotspot.id && (
                    <div className={`info ${hotspot.x > 70 ? 'leftShift' : ''}`}>
                        <Title {...{ selectedHotspot, setAttributes, hotspots }} />
                        <Description {...{ selectedHotspot, setAttributes, hotspots }} />
                    </div>
                )}
            </div>
        </Draggable>
    )
}

export default HoverCardDraggble;