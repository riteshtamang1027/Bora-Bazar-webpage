import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demos from "./pages/demos.jsx";
import Category from "./pages/category.jsx";
import Dietary from "./pages/dietary.jsx";
import Shop from "./pages/shop.jsx";
import Blog from "./pages/blog.jsx";
import Search from "./pages/search.jsx";
import Upper_Botton from "./components/upper_botton.jsx";
import Top_Navbar from "./components/Top_Navbar.jsx";
import Middle_Navbar from "./components/Middle_Navbar.jsx";
import Single_Product from "./pages/single-product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Top_Navbar />
      <Middle_Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dietary" element={<Dietary />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/single_product/:id" element={<Single_Product/>} />

      </Routes>
      <Upper_Botton />
    </BrowserRouter>
  </StrictMode>
);
