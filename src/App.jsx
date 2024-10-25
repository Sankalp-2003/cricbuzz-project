import React from "react";
import TopCarousel from "./components/carousel1/TopCarousel";
import "./style.css";
import BottomCarousel from "./components/carousel2/BottomCarousel";

function App() {
  return (
    <div className="main">
      <TopCarousel />
      <BottomCarousel />
    </div>
  );
}

export default App;
