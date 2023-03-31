import ProductSlider from "../../components/ProductSlider/ProductSlider";
import BlogTwo from "./BlogTwo";
import "./menu.css";
import MenuNavbar from "./MenuNavbar";
import { useState, useEffect } from "react";

const MenuTwo = () => {
  useEffect(() => {
    console.log("Applied");
  }, []);

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          {/* <Blog blogs={blogs} title="First Section" />
          <Blog
            blogs={blogs.filter(
              (blog) => blog.title === "Phased local complexity"
            )}
            title="Second Section"
          /> */}
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default MenuTwo;
