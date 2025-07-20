import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalUnitControl as UnitControl, PanelRow } from "@wordpress/components";
import { pxUnit, perUnit } from "../../../../../../bpl-tools/utils/options";
import { Device, Label } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { sanitizePerUnitValue } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles } = attributes;
  const { width } = styles || {};


  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Product Wrapper', 'product-spot')} initialOpen={false}>

      <PanelRow>
          <Label className="">{__("Width", "product-spot")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={sanitizePerUnitValue(width[device])}
          onChange={(v) =>{
            const sanitized = sanitizePerUnitValue(v);
            setAttributes({ styles: updateData(styles, sanitized, "width", device) })
          }}
          units={[pxUnit(), perUnit()]}
        />



      </PanelBody>
    </>
  )
}

export default Style