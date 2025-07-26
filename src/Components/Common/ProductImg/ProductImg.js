import { defaultImg } from "../../../utils/options";

const ProductImg = ({ imageRef, img }) => {
    return (
        <img
            ref={imageRef}
            src={img?.url || defaultImg}
            alt={img?.alt || 'product-image'}
            className="image"
        />
    )
}

export default ProductImg;