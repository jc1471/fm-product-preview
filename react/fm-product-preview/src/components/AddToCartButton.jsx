import iconCart from "../assets/icon-cart.svg";

export default function AddToCartBtn() {
    return (
        <div className="add-to-cart-btn">
            <button>
                <img
                    className="cart-image"
                    src={iconCart} />
                <p className="add-to-cart">Add to Cart</p>
            </button>
        </div>
    )
}