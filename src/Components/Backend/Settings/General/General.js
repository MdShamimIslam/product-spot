import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";

const General = () => {

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Product Spots", "product-spot")}
      initialOpen={false}
    >
     
    </PanelBody>
  );
};

export default General;
