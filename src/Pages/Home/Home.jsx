import React, { Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import Stats from "../../Components/Stats/Stats";
import Trending from "../../Components/Trending/Trending";
import Loader from "../Loader/Loader";


const Home = () => {
  return (
    <div>
      {/* <Loader></Loader> */}
      <Hero></Hero>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Trending></Trending>
      </Suspense>
    </div>
  );
};

export default Home;
