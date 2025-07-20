import { useState, useRef, useEffect } from 'react';

const useHotspotManager = (attributes = {}, setAttributes = () => { }) => {
    const { img = {}, hotspots = [] } = attributes;
    const [activeHotspot, setActiveHotspot] = useState(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    // const [activeIndex, setActiveIndex] = useState(1);

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
        const updateSize = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                setContainerSize({
                    width: rect.width,
                    height: rect.height,
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
            description: `Hotspot Description ${nextId}`,
        };

        setAttributes({ hotspots: [...hotspots, newHotspot] });
        setActiveHotspot(newHotspot.id);
    };

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

    const handleDeleteHotspot = (id) => {
        const updated = hotspots.filter(h => h.id !== id);
        setAttributes({ hotspots: updated });
        setActiveHotspot(null);
    };

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
        hotspots,
        // activeIndex
    };
}


export default useHotspotManager;
