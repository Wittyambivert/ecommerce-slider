import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import MenuTwo from "./pages/Menu/MenuTwo";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu-two" element={<MenuTwo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
