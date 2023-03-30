import "./product-slider.css";
import Carousel from "react-multi-carousel";
import Products from "./Products";
import "react-multi-carousel/lib/styles.css";
import { productsData, responsive } from "./ProductData";

const ProductSlider = () => {
  const productMap = productsData.map((items) => (
    <Products
      key={items.id}
      title={items.title}
      src={items.src}
      price={items.price}
    />
  ));

  return (
    <>
      <div className="product-container">
        <div className="products">
          <div className="products-title">New In</div>
          <Carousel
            customLeftArrow={null}
            customRightArrow={null}
            responsive={responsive}
          >
            {productMap}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
