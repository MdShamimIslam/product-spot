import useHotspotManager from "../../../hooks/useHotspotManager";
import ProductImg from "../ProductImg/ProductImg";
import Title from "../../Backend/TtitleDesBack/Title";
import Description from "../../Backend/TtitleDesBack/Description";
import TitleF from "../../frontend/TitleDes/TitleF";
import DescriptionF from "../../frontend/TitleDes/DescriptionF";

const SidePanel = ({ attributes, setAttributes, isBackend = true, Hotspot }) => {
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

  const backendHotspotProps = isBackend ? { containerSize, boundsTarget:".imageAndHotspot", handleStop, handleDeleteHotspot } : {}

  return (
    <div className="sidePanel" ref={containerRef}>
      <div className="imageAndHotspot">
        <div onClick={isBackend ? handleAddHotspot : undefined}>
          <ProductImg {...{ imageRef, img }} />
        </div>

        {containerSize.width > 0 && hotspots?.map(hotspot => <Hotspot key={hotspot?.id} {...{ hotspot, activeHotspot, setActiveHotspot }} {...backendHotspotProps} />)}

      </div>

      <div className="infoBox">
        <div className="info">
          {isBackend ?
            <>
              <Title {...{ selectedHotspot, setAttributes, hotspots }} />
              <Description {...{ selectedHotspot, setAttributes, hotspots }} />
            </> : <>
              <TitleF {...{ selectedHotspot }} />
              <DescriptionF {...{ selectedHotspot }} />
            </>
          }

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
