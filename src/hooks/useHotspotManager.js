import { useState, useRef, useEffect } from 'react';

const useHotspotManager = (attributes = {}, setAttributes = () => { }) => {
    const { img = {}, hotspots = [] } = attributes;
    const [activeHotspot, setActiveHotspot] = useState(attributes?.themeSl === "sidepanel" ? 1 : null); 
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const selectedHotspot = hotspots.find(h => h.id === activeHotspot);

    useEffect(() => {
        if (activeHotspot !== null) {
            const index = hotspots.findIndex(h => h.id === activeHotspot);
            if (index !== -1) {
                setAttributes({ activeIndex: index });
            }
        }
    }, [activeHotspot, hotspots]);


    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;
    
        const observer = new ResizeObserver(() => {
            const rect = image.getBoundingClientRect();
            setContainerSize({
                width: rect.width,
                height: rect.height,
            });
        });
    
        observer.observe(image);
    
        return () => {
            observer.disconnect();
        };
    }, []);
    

    const handleAddHotspot = (e) => {
        if (e.target.closest('.hotspot')) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const nextId = hotspots.length > 0 ? Math.max(...hotspots.map(h => h.id)) + 1 : 1;

        const newHotspot = {
            id: nextId,
            x,
            y,
            title: `Hotspot Title ${nextId}`,
            description: `Hotspot Description ${nextId}`,
        };

        setAttributes({ hotspots: [...hotspots, newHotspot] });
        setActiveHotspot(newHotspot.id);
    };

    const handleStop = (_e, data, hotspotId) => {
        const rect = imageRef.current.getBoundingClientRect();
        const xPercent = ((data.x + 12) / rect.width) * 100;
        const yPercent = ((data.y + 12) / rect.height) * 100;

        const updatedHotspots = hotspots.map(hotspot =>
            hotspot.id === hotspotId
                ? { ...hotspot, x: xPercent, y: yPercent }
                : hotspot
        );
        setAttributes({ hotspots: updatedHotspots });
    };

    const handleDeleteHotspot = (id) => {
        const updated = hotspots.filter(h => h.id !== id);
        setAttributes({ hotspots: updated });
        setActiveHotspot(null);
    };

    // const defaultImg = defaultImg;

    return {
        containerRef,
        imageRef,
        containerSize,
        setContainerSize,
        activeHotspot,
        setActiveHotspot,
        selectedHotspot,
        handleAddHotspot,
        handleStop,
        handleDeleteHotspot,
        img,
        hotspots
    };
}


export default useHotspotManager;
