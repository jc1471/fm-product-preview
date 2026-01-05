import imageProductMobile from "../assets/image-product-mobile.jpg";
import imageProductDesktop from "../assets/image-product-desktop.jpg";

export default function ImageSection() {
    return (
        <div className="image-section">
            <picture>
                <source
                    srcSet={imageProductMobile}
                    media="(max-width: 375px)"
                />
                <img
                    className="product-image"
                    src={imageProductDesktop}
                    alt="Product Image"
                    loading="lazy"
                />
            </picture>
        </div>
    );
}