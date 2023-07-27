import './product-card.css';

export const ProductCard = ({ data }) => {
    const { category, name, address, badges, logoSrc, photoSrc } = data;

    return (
        <div className="ProducentCard">
            <div className="Frame13-product-card">
                <div className="CardPhoto">
                    <div className="Rectangle3" />
                    <img className="image-product-card" src={photoSrc} alt="" />
                </div>
                <div className="Frame10-product-card">
                    <div className="Frame11-product-card">
                        <div className="product-card-category-text">{category}</div>
                        <div className="product-card-name-text">{name}<br /></div>
                    </div>
                    <div className="product-card-address-text">{address}</div>
                    <div className="Frame12-product-card">
                        {badges.map((badge, index) => (
                            <div className="BadgeCount" key={index}>
                                <div className="Badge">
                                    <div className="product-card-badge-text">{badge}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="CardLogo">
                <div className="CardLogo-Ellipse" />
                <img className="CardLogo-image" src={logoSrc} alt="" />
            </div>
        </div>
    );
};
