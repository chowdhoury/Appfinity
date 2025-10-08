import React, { use } from "react";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const Trending = ({ appsPromise }) => {
  const appsData = use(appsPromise);
  const trendingApps = [...appsData]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);
  // console.log(appsData)
  return (
    <div className="mt-20 px-2 lg:px-20">
      <div className="text-center">
        <h2 className="text-5xl text-[#001931] font-bold">Trending Apps</h2>
        <p className="text-[20px] text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingApps.map((trendingApp) => (
          <AppCard key={trendingApp.id} trendingApp={trendingApp}></AppCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/apps"}>
          <button className="cursor-pointer flex items-center gap-[10px] rounded-sm bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-[#FFF] px-4 py-3 text-[16px] font-semibold">
            <h2>Show All</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
