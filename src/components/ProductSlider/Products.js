const Products = ({ src, title, price }) => {
  return (
    <div className="products-item">
      <img className="product-image" src={src} alt="product image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default Products;
