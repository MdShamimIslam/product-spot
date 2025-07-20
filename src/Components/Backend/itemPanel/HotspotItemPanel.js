import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import { RangeControl, TextControl } from "@wordpress/components";

const HotspotItemPanel = ({ attributes, setAttributes, arrKey, index, setActiveIndex = false }) => {
  const hotspots = attributes[arrKey];

  const updateHotspot = (property, val, childProperty = null) => {
    const newItems = produce(attributes[arrKey], (draft) => {
      if (null !== childProperty) {
        draft[index][property][childProperty] = val;
      } else {
        draft[index][property] = val;
      }
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex && setActiveIndex(index);
  };

  return (
    <>
      <RangeControl
        label={__("X Position", "hotspot")}
        value={hotspots[index].x}
        onChange={(val) => updateHotspot("x", parseInt(val))}
      />
      <RangeControl
        label={__("Y Position", "hotspot")}
        value={hotspots[index].y}
        onChange={(val) => updateHotspot("y", parseInt(val))}
      />
      <TextControl
        label={__("Title", "hotspot")}
        value={hotspots[index].title}
        onChange={(val) => updateHotspot("title", val)}
      />
      <TextControl
        label={__("Description", "hotspot")}
        value={hotspots[index].description}
        onChange={(val) => updateHotspot("description", val)}
      />

    </>
  );
};

export default HotspotItemPanel;
