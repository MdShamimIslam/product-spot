import Tippy from '@tippyjs/react';
import { Plus } from 'lucide-react';
import 'tippy.js/dist/tippy.css';
import useHotspotManager from '../../../hooks/useHotspotManager';
import ProductImg from '../ProductImg/ProductImg';
import Draggable from 'react-draggable';
import Title from '../../Backend/TtitleDesBack/Title';
import Description from '../../Backend/TtitleDesBack/Description';
import TitleF from '../../frontend/TitleDes/TitleF';
import DescriptionF from '../../frontend/TitleDes/DescriptionF';

export function TippyHotspots({ attributes, setAttributes, isBackend = true }) {
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
    <div className="tippy" ref={containerRef}>
      <div onClick={isBackend ? handleAddHotspot : undefined}>
        <ProductImg {...{ imageRef, img }} />
      </div>

      {containerSize.width > 0 && hotspots.map(hotspot => (
        <Draggable
          key={hotspot.id}
          position={{
            x: (hotspot.x / 100) * containerSize.width - 12,
            y: (hotspot.y / 100) * containerSize.height - 12
          }}
          bounds=".tippy"
          onStop={(e, data) => handleStop(e, data, hotspot.id)}
        >
          <Tippy
            content={
              <>
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
              </>
            }
            placement="top"
            theme="hotspot"
            arrow={true}
            interactive={true}
            onShow={() => setActiveHotspot(hotspot.id)}
            onHide={() => setActiveHotspot(null)}
          >
            <div
              className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
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
          </Tippy>

        </Draggable>


      ))}
    </div>
  );
}
