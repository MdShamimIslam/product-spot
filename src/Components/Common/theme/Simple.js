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
  const imageRef = useRef(null);

  const selectedHotspot = hotspots.find(h => h.id === activeHotspot);

  useEffect(() => {
    const updateSize = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height
        });
      }
    };

    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        updateSize();
      } else {
        image.addEventListener('load', updateSize);
      }
    }

    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
      if (image) {
        image.removeEventListener('load', updateSize);
      }
    };
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

  const handleAddHotspot = (e) => {
    if (e.target.closest('.hotspot')) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const nextId = hotspots.length > 0 ? Math.max(...hotspots.map(h => h.id)) + 1 : 1;

    const newHotspot = {
      id: nextId,
      x,
      y,
      title: `Hotspot Title ${nextId}`,
      description: `Hotspot Description ${nextId}`
    };

    setAttributes({ hotspots: [...hotspots, newHotspot] });
    setActiveHotspot(newHotspot.id);
  };


  return (
    <div className="simple" ref={containerRef}  >
      <div onClick={isBackend ? handleAddHotspot : undefined}>
        <img
          ref={imageRef}
          src={img?.url || defaultImg}
          alt={img?.alt || 'simple-product'}
          className="image"

        />
      </div>

      {containerSize.width > 0 && hotspots?.map(hotspot => (
        isBackend ? (
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
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            >
              <Plus className="icon" />

              <span
                className="delete-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  const updated = hotspots.filter(h => h.id !== hotspot.id);
                  setAttributes({ hotspots: updated });
                  setActiveHotspot(null);
                }}
              >
                x
              </span>

            </div>
          </Draggable>
        ) : (
          <div
            key={hotspot.id}
            className={`hotspot ${activeHotspot === hotspot.id ? 'hotspot-pulse' : ''}`}
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
  );
};

export default Simple;
