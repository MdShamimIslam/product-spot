import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl } from "@wordpress/components";
import { Label, InlineDetailMediaUpload, ItemsPanel } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { getNextId } from "../../../../utils/functions";
import HotspotItemPanel from "../../itemPanel/HotspotItemPanel";
import { themeOptions } from "../../../../utils/options";
import { produce } from "immer";


const General = ({ attributes, setAttributes }) => {
  const { themeSl, img = {}, hotspots = [], activeIndex } = attributes || {};

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Product Configuration", "product-spot")}
      initialOpen={false}
    >
       <SelectControl
          label={__("Select Theme", "mp3player-block")}
          labelPosition="left"
          value={themeSl}
          options={themeOptions}
          onChange={(val) => {
            const updateAttr = produce(attributes, (draft) => {
              draft.themeSl = val;
              if (val === "sidepanel") {
                draft.align = "wide";
              }else{
                draft.align = "";
              }
              
            });
            setAttributes(updateAttr);
          }}
        />

      <Label>{__("Product Image:", "product-spot")}</Label>
      <InlineDetailMediaUpload
        types={["image"]}
        value={img}
        onChange={(v) => setAttributes({ img: updateData(img, v) })}
        placeholder={__("Enter Product Image URL", "product-spot")}
      />

      <div style={{ marginTop: "10px" }}>
        <Label>{__("Product Hotspots:", "product-spot")}</Label>
        <ItemsPanel
          {...{ attributes, setAttributes, activeIndex }}
          arrKey="hotspots"
          newItem={{
            id: getNextId(hotspots),
            x: 20,
            y: 30,
            title: `hotspot title ${getNextId(hotspots)}`,
            description: `hotspot description ${getNextId(hotspots)}`
          }}
          ItemSettings={HotspotItemPanel}
          itemLabel="Hotspot"
          design="all"
        />

      </div>
    </PanelBody>
  );
};

export default General;
