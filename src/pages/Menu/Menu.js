// import { NavLink } from "react-router-dom";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Blog from "./Blog";
import "./menu.css";
import MenuNavbar from "./MenuNavbar";
import { useState, useEffect } from "react";
import { blogData } from "../../components/ProductSlider/ProductData";

const Menu = () => {
  const [blogs, setBlog] = useState(blogData);

  const [name, setName] = useState("memer");

  const handleDelete = (id) => {
    const remove = blogs.filter((blog) => blog.id !== id);
    setBlog(remove);
  };

  // useEffect(() => {
  //   console.log("Applied");
  //   console.log(name);
  // }, [name]);

  return (
    <>
      <div className="section-b">
        <div className="menu-wrapper">
          <MenuNavbar />
          <Blog
            blogs={blogs}
            title="First Section"
            handleDelete={handleDelete}
          />
          <Blog
            blogs={blogs.filter(
              (blog) => blog.title === "Phased local complexity"
            )}
            title="Second Section"
            handleDelete={handleDelete}
          />
          <h2 style={{ color: "#222" }}>{name}</h2>
          <button onClick={() => setName("Brain")}>Change name</button>
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default Menu;
