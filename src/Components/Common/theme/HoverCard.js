import { Plus } from "lucide-react";
import ProductImg from "../ProductImg/ProductImg";
import useHotspotManager from "../../../hooks/useHotspotManager";
import TitleF from "../../frontend/TitleDes/TitleF";
import DescriptionF from "../../frontend/TitleDes/DescriptionF";
import HoverCardDraggble from "../../Backend/HoverCardDraggble/HoverCardDraggble";

const HoverCard = ({ attributes, setAttributes, isBackend = true }) => {
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


  const renderFrontendHotspot = (hotspot) => (
    <div
      key={hotspot.id}
      className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`
      }}
      onMouseEnter={() => setActiveHotspot(hotspot.id)}
      onMouseLeave={() => setActiveHotspot(null)}
    >
      <Plus className="icon" />
      {activeHotspot === hotspot.id && <>

        {
          (
            <div className={`info ${hotspot.x > 70 ? 'leftShift' : ''}`}>
              <TitleF {...{ selectedHotspot }} />
              <DescriptionF {...{ selectedHotspot }} />
            </div>
          )
        }
      </>
      }
    </div>
  );

  return (
    <div className="hoverCard" ref={containerRef}>
      <div onClick={isBackend ? handleAddHotspot : undefined}>
        <ProductImg {...{ imageRef, img }} />
      </div>

      {containerSize.width > 0 &&
        hotspots.map((hotspot) =>
          isBackend
            ? <HoverCardDraggble key={hotspot.id} {...{ hotspot, containerSize, handleStop, activeHotspot, setActiveHotspot, handleDeleteHotspot, selectedHotspot, setAttributes, hotspots }} />
            : renderFrontendHotspot(hotspot)
        )}
        
    </div>
  );
};

export default HoverCard;
