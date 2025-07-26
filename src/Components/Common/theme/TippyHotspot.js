import Tippy from '@tippyjs/react';
import { Plus } from 'lucide-react';
import 'tippy.js/dist/tippy.css';
import useHotspotManager from '../../../hooks/useHotspotManager';
import ProductImg from '../ProductImg/ProductImg';
import TitleF from '../../frontend/TitleDes/TitleF';
import DescriptionF from '../../frontend/TitleDes/DescriptionF';
import TippyDraggble from '../../Backend/TippyDraggble/TippyDraggble';

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
        isBackend ?
          <TippyDraggble
            key={hotspot.id}
            {...{
              hotspot,
              containerSize,
              activeHotspot,
              setActiveHotspot,
              selectedHotspot,
              setAttributes,
              hotspots,
              handleStop,
              handleDeleteHotspot
            }}
          /> :
          <div
            key={hotspot.id}
            className={`hotspot ${activeHotspot === hotspot.id ? 'activeHotspot' : ''}`}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          >
            <Tippy
              content={
                <div className='info'>
                  <TitleF {...{ selectedHotspot }} />
                  <DescriptionF {...{ selectedHotspot }} />
                </div>
              }
              placement="top"
              theme="hotspot"
              arrow={true}
              interactive={true}
              onShow={() => setActiveHotspot(hotspot.id)}
              onHide={() => setActiveHotspot(null)}
            >
              <Plus className="icon" />

            </Tippy>
          </div>
      ))
      }
    </div >
  );
}
