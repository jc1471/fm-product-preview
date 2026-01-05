import iconCart from "../assets/icon-cart.svg";

export default function AddToCartBtn() {
    return (
        <div className="add-to-cart-btn">
            <button>
                <img src={iconCart}/>
                <p>Add to Cart</p>
            </button>
        </div>
    )
}