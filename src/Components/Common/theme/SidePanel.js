import { Plus } from "lucide-react";
import { defaultImg } from "../../../utils/options";
import useHotspotManager from "../../../hooks/useHotspotManager";
import Draggable from "react-draggable";

const SidePanel = ({ attributes, setAttributes, isBackend = true }) => {
  const {
    containerRef,
    imageRef,
    containerSize,
    activeHotspot,
    setActiveHotspot,
    selectedHotspot,
    handleAddHotspot,
    handleStop,
    handleDeleteHotspot,
    img,
    hotspots
  } = useHotspotManager(attributes, setAttributes);


  return (
    <div className="sidePanel" ref={containerRef}>
      <div className="imageAndHotspot">
        <div onClick={isBackend ? handleAddHotspot : undefined}>
          <img
            ref={imageRef}
            src={img?.url || defaultImg}
            alt={img?.alt || "sidePanel-product"}
            className="image"
          />
        </div>

        {containerSize.width > 0 && hotspots?.map(hotspot => (
          isBackend ? (
            <Draggable
              key={hotspot.id}
              position={{
                x: (hotspot.x / 100) * containerSize.width - 12,
                y: (hotspot.y / 100) * containerSize.height - 12
              }}
              bounds=".imageAndHotspot"
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
          ) : (
            <div
              key={hotspot.id}
              className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`
              }}
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            >
              <Plus className="icon" />
            </div>
          )
        ))}
        
      </div>

      <div className="infoBox">
        <div className="info">
          <h3 className="title">{selectedHotspot?.title}</h3>
          <p className="desc">{selectedHotspot?.description}</p>

          <div className="btnGroup">
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                className={`indexBtn ${activeHotspot === hotspot.id ? "activeIdx" : ""
                  }`}
                onClick={() => setActiveHotspot(hotspot.id)}
              >
                {hotspot.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
