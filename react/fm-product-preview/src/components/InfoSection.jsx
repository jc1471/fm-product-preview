import AddToCartBtn from "./AddToCartButton";

export default function InfoSection() {
    return (
            <div className="info-section">
                <h1 className="category-name">PERFUME</h1>
                <h2 className="product-name">Gabrielle Essence Eau De Parfum</h2>
                <p className="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
                <div className="price-section">  
                    <p className="sale-price">$149.99</p>
                    <p className="original-price">$169.99</p>
                </div>  
                <AddToCartBtn />
            </div>
    )
}