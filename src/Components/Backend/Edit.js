import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Simple from "../Common/theme/Simple";
import SidePanel from "../Common/theme/SidePanel";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  const settingprops = {
    attributes,
    setAttributes,
    device
  }


  return (
    <>
      <Settings {...settingprops} />

      <div {...useBlockProps({ draggable: false })}>
        <Style {...{attributes, id:`block-${clientId}`, device }} />

        <div className="productSpotWrapper">
          <div className="productSpot">
            {/* <Simple {...{attributes, setAttributes}} /> */}
            <SidePanel  {...{attributes, setAttributes}} />
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