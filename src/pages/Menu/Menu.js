// import { NavLink } from "react-router-dom";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Blog from "./Blog";
import "./menu.css";
import MenuNavbar from "./MenuNavbar";
import { useState } from "react";
import { blogData } from "../../components/ProductSlider/ProductData";

const Menu = () => {
  const [blogs, setBlog] = useState(blogData);

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          <Blog blogs={blogs} title="First Section" />
          <Blog
            blogs={blogs.filter(
              (blog) => blog.title === "Phased local complexity"
            )}
            title="Second Section"
          />
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default Menu;
