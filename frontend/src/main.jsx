import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
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
import Sign_In from "./pages/Sign_In.jsx";
export default function Root() {
   const [Signin,setSignin]=useState(false);
   const show=()=>setSignin(true);
   const hide=()=>setSignin(false);
  return (
    <StrictMode>
      <Top_Navbar />
       <Middle_Navbar show={show} />
       {
        Signin &&
      <Sign_In remove={hide}  />

       }
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dietary" element={<Dietary />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/single_product/:id" element={<Single_Product />} />
      </Routes>
      <Upper_Botton />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
