import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  const settingprops = {
    attributes,
    setAttributes,
    device,
    clientId
  }


  return (
    <>
      <Settings {...settingprops} />

      <div {...useBlockProps({ draggable: false })}>
        <Style {...{ attributes, id: `block-${clientId}`, device }} />

        <div className="productSpotWrapper">
          <div className="productSpot">
            <Theme {...{ attributes, setAttributes }} />
          </div>
        </div>
      </div>
    </>
  );
};


export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);