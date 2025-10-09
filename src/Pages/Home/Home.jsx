import React, { Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import Stats from "../../Components/Stats/Stats";
import Trending from "../../Components/Trending/Trending";
import { useLoaderData } from "react-router";

const Home = () => {
  useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Stats></Stats>
      <Trending></Trending>
    </div>
  );
};

export default Home;
