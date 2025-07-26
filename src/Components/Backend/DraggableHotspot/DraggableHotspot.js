import { Plus } from "lucide-react";
import Draggable from "react-draggable";

const DraggableHotspot = ({ hotspot, containerSize, boundsTarget=".image", handleStop, activeHotspot, setActiveHotspot, handleDeleteHotspot }) => {

    return (
        <Draggable
            position={{
                x: (hotspot.x / 100) * containerSize.width - 12,
                y: (hotspot.y / 100) * containerSize.height - 12
            }}
            bounds={boundsTarget}
            onStop={(e, data) => handleStop(e, data, hotspot.id)}
        >
            <div
                className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
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

            </div>

        </Draggable>
    )
}

export default DraggableHotspot;