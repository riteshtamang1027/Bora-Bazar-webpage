import React from "react";
import Top_Navbar from "./components/Top_Navbar";
import Middle_Navbar from "./components/Middle_Navbar";
import Hero_Section from "./components/Hero_Section";
import Banner from "./components/Banner";
import Food_Items from "./components/Food_Items";
import Best_Seller_Grocery from "./components/Best_Seller_Grocery";
import Best_Food_Items from "./components/best_food_items";
import Online_Shop from "./components/online_shop";
import Upper_Botton from "./components/upper_botton";
export default function App() {
  return (
    <div>
      <Top_Navbar />
      <Middle_Navbar />
      <Hero_Section />
      <Banner/>
      <Food_Items/>
      <Best_Seller_Grocery/>  
      <Best_Food_Items/>
      <Online_Shop/>
      <Upper_Botton/>
    </div>
  );
}
