import React, { Fragment } from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Features from "../components/Features";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Slider />
        <NewArrival />
        <Features />
        <Categories />
      </div>
    </Fragment>
  );
};

export default Home;
