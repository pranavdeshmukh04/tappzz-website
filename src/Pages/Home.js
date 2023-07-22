<<<<<<< HEAD
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
=======
import React from 'react'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Features from '../components/Features'
import NewArrival from '../components/NewArrival'
const Home = () => {
  return (
    <div>
      <Slider/>
      <NewArrival/>
      <Features />
      <Categories/>
      <Footer/>
    </div>
  )
}
>>>>>>> main

export default Home;
