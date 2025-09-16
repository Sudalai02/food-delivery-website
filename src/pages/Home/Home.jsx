import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <section id="home">
        <Header />
      </section>

      <section id="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </section>

      <section id="food-display">
        <FoodDisplay category={category} />
      </section>

      <section id="app-download">
        <AppDownload />
      </section>
    </div>
  );
};

export default Home;