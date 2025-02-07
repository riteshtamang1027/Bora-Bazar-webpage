import React, { useState } from "react";
import Hero_Section from "./components/Hero_Section";
import Banner from "./components/Banner";
import Food_Items from "./components/Food_Items";
import Best_Seller_Grocery from "./components/Best_Seller_Grocery";
import Best_Food_Items from "./components/best_food_items";
import Online_Shop from "./components/online_shop";
import Sign_In from "./pages/Sign_In";
import Middle_Navbar from "./components/Middle_Navbar";

export default function App() {
  const [ShowSignin,setSignin] = useState(false);
  const Remove=()=>setSignin(false);

  return (
    <div >
      <Middle_Navbar onClick={()=>(setSignin(true))}   />
      <Hero_Section />
      { ShowSignin &&
      <Sign_In Hide={Remove} />

      }
      {/* <Bottom/> */}
      <Banner />
      <Food_Items />
      <Best_Seller_Grocery />
      <Best_Food_Items />
      <Online_Shop  />
        </div>
  );
}
