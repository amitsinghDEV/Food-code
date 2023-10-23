import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import FoodList from "./components/FoodList";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <HeadlineCard />
      <FoodList />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
