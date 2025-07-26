import useHotspotManager from '../../../hooks/useHotspotManager';
import Title from '../../Backend/TtitleDesBack/Title';
import Description from '../../Backend/TtitleDesBack/Description';
import TitleF from '../../frontend/TitleDes/TitleF';
import DescriptionF from '../../frontend/TitleDes/DescriptionF';
import ProductImg from '../ProductImg/ProductImg';

const Simple = ({ attributes, setAttributes, isBackend = true, Hotspot }) => {
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

  const backendHotspotProps = isBackend ? { containerSize, handleStop, handleDeleteHotspot } : {}

  return (
    <>
      <div className="simple" ref={containerRef} >

        <div onClick={isBackend ? handleAddHotspot : undefined}>
          <ProductImg {...{ imageRef, img }} />
        </div>

        {containerSize.width > 0 && hotspots?.map(hotspot => <Hotspot key={hotspot?.id} {...{ hotspot, activeHotspot, setActiveHotspot }} {...backendHotspotProps} />)}

      </div>

      {activeHotspot !== null && selectedHotspot && (
        <div className='simpleInfo'>
          {
            isBackend ? (
              <>
                <Title {...{ selectedHotspot, setAttributes, hotspots }} />
                <Description {...{ selectedHotspot, setAttributes, hotspots }} />
              </>

            ) : (
              <>
                <TitleF {...{ selectedHotspot }} />
                <DescriptionF {...{ selectedHotspot }} />
              </>
            )
          }
        </div>

      )
      }

    </>
  );
};

export default Simple;

