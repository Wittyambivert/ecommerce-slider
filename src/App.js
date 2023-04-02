import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import MenuTwo from "./pages/Menu/MenuTwo";
import PageNotFound from "./pages/404/PageNotFound";
import BlogDetails from "./pages/Menu/BlogDetails";
import NewBlog from "./pages/Menu/NewBlog";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-two" element={<MenuTwo />} />
        <Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/*" element={<BlogDetails />} />
        </Route>
        <Route path="/new-blog" element={<NewBlog />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
