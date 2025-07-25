export const sanitizePerUnitValue = (value) => {
  if (typeof value === 'string') {
    if (value.endsWith('%')) {
      const num = parseFloat(value);
      if (num > 100) {
        return '100%';
      }
    }
  }
  return value;
}


export const getNextId = (hotspots) => {
  const ids = hotspots.map((h) => h.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};

export const updateHotspotField = (hotspots, setAttributes, hotspotId, field, value) => {
  const updatedHotspots = hotspots?.map(h =>
      h?.id === hotspotId ? { ...h, [field]: value } : h
  );
  setAttributes({ hotspots: updatedHotspots });
  
};
