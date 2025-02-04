import React from "react";
import Hero_Section from "./components/Hero_Section";
import Banner from "./components/Banner";
import Food_Items from "./components/Food_Items";
import Best_Seller_Grocery from "./components/Best_Seller_Grocery";
import Best_Food_Items from "./components/best_food_items";
import Online_Shop from "./components/online_shop";
import Single_Product_Card from "./pages/single-product-card";

export default function App() {
  return (
    <div>
      
      <Hero_Section />
      <Banner />
      <Food_Items />
      <Best_Seller_Grocery />
      <Best_Food_Items />
      <Online_Shop />
      
{/* <Single_Product_Card/> */}
    </div>
  );
}
