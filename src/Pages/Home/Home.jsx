import React, { Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import Stats from "../../Components/Stats/Stats";
import Trending from "../../Components/Trending/Trending";

const appsPromise = fetch("/appsData.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Trending appsPromise={appsPromise}></Trending>
      </Suspense>
    </div>
  );
};

export default Home;
