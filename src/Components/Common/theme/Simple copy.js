import { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Draggable from 'react-draggable';
import { defaultImg } from '../../../utils/options';
import TitleDes from '../../frontend/TitleDes/TitleDes';
import TitleDesBack from '../../Backend/TtitleDesBack/TtitleDesBack';

const Simple = ({ attributes, setAttributes, isBackend = true }) => {
  const { img = {}, hotspots = [] } = attributes || {};
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  const selectedHotspot = hotspots.find(h => h.id === activeHotspot);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleStop = (_e, data, hotspotId) => {
    const rect = containerRef.current.getBoundingClientRect();

    const xPercent = ((data.x + 12) / rect.width) * 100;
    const yPercent = ((data.y + 12) / rect.height) * 100;

    const updatedHotspots = hotspots.map(hotspot =>
      hotspot.id === hotspotId
        ? { ...hotspot, x: xPercent, y: yPercent }
        : hotspot
    );
    setAttributes({ hotspots: updatedHotspots });
  };

  return (
    <div className="simple" ref={containerRef}>
      <img
        src={img?.url || defaultImg}
        alt={img?.alt || 'simple-product'}
        className="image"
      />

      {containerSize.width > 0 && hotspots?.map(hotspot => (
        <Draggable
          key={hotspot.id}
          defaultPosition={{
            x: (hotspot.x / 100) * containerSize.width - 12,
            y: (hotspot.y / 100) * containerSize.height - 12
          }}
          bounds="parent"
          onStop={(e, data) => handleStop(e, data, hotspot.id)}
        >
          <div
            className={`hotspot ${activeHotspot === hotspot.id ? 'hotspot-pulse' : ''}`}
            onClick={() =>
              setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
            }
          >
            <Plus className="icon" />
          </div>
        </Draggable>
      ))}

      {activeHotspot !== null && selectedHotspot && (
        isBackend ? (
          <TitleDesBack
            selectedHotspot={selectedHotspot}
            setAttributes={setAttributes}
            hotspots={hotspots}
          />
        ) : (
          <TitleDes {...selectedHotspot} />
        )
      )}

    </div>
    // <div className="simple" ref={containerRef}>
    //   <img
    //     src={img?.url || defaultImg}
    //     alt={img?.alt || 'simple-product'}
    //     className="image"
    //   />

    //   {containerSize.width > 0 && hotspots?.map(hotspot => {
    //     const hotspotElement = (
    //       <div
    //         className={`hotspot ${activeHotspot === hotspot.id ? 'hotspot-pulse' : ''}`}
    //         onClick={() =>
    //           setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)
    //         }
    //       >
    //         <Plus className="icon" />
    //       </div>
    //     );

    //     return isBackend ? (
    //       <Draggable
    //         key={hotspot.id}
    //         defaultPosition={{
    //           x: (hotspot.x / 100) * containerSize.width - 12,
    //           y: (hotspot.y / 100) * containerSize.height - 12
    //         }}
    //         bounds="parent"
    //         onStop={(e, data) => handleStop(e, data, hotspot.id)}
    //       >
    //         {hotspotElement}
    //       </Draggable>
    //     ) : (
    //       <div
    //         key={hotspot.id}
    //         className="absolute"
    //         style={{
    //           left: `${hotspot.x}%`,
    //           top: `${hotspot.y}%`,
    //           transform: 'translate(-50%, -50%)'
    //         }}
    //       >
    //         {hotspotElement}
    //       </div>
    //     );
    //   })}

    //   {activeHotspot !== null && selectedHotspot && (
    //     isBackend ? (
    //       <TitleDesBack
    //         selectedHotspot={selectedHotspot}
    //         setAttributes={setAttributes}
    //         hotspots={hotspots}
    //       />
    //     ) : (
    //       <TitleDes {...selectedHotspot} />
    //     )
    //   )}
    // </div>
  );
};

export default Simple;
