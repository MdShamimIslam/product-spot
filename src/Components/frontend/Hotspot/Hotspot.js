import { Plus } from "lucide-react";

const Hotspot = ({ activeHotspot, hotspot, setActiveHotspot }) => {
    return (
        <div
            className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
        >
            <Plus className="icon" />
        </div>
    )
}

export default Hotspot;