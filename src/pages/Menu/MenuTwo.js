import ProductSlider from "../../components/ProductSlider/ProductSlider";
import BlogTwo from "./BlogTwo";
import "./menu.css";
import MenuNavbar from "./MenuNavbar";
import useFetch from "./useFetch";

const MenuTwo = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogTwo blogs={blogs} title="First Section" />}
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default MenuTwo;
