import React from "react";

import Top_Navbar from "./components/Top_Navbar";
import Middle_Navbar from "./components/Middle_Navbar";
import Hero_Section from "./components/Hero_Section";
import Banner from "./components/Banner";
import Food_Items from "./components/Food_Items";
export default function App() {
  return (
    <div>
      <Top_Navbar />
      <Middle_Navbar />
      <Hero_Section />
      <Banner/>
      <Food_Items/>
    </div>
  );
}
