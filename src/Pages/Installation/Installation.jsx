import React, { useEffect, useState } from 'react';
import InstalledAppCard from '../../Components/InstalledAppCard/InstalledAppCard';

const Installation = () => {
  const [installed, setInstalled] = useState([])
  const [filter, setFilter] = useState('')
  // console.log(filter);
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installed"));
    setInstalled(installedList);
    // console.log(installedList)
  }, [])
  
  const sortedInstalled=() => {
    if (filter === "ascending") {
      return [...installed].sort((a,b)=>a.downloads-b.downloads)
    } else if (filter === "descending") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    }else return installed
  }
    return (
      <div className="px-2 lg:px-20">
        <div className="text-center">
          <h2 className="text-5xl text-[#001931] font-bold">
            Your Installed Apps
          </h2>
          <p className="text-[20px] text-[#627382] mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h3 className="text-2xl text-[#001931] font-semibold">
            {installed.length} Apps Found
          </h3>
          <select
            defaultValue="Apply Filter"
            onChange={(e) => setFilter(e.target.value)}
            className="select w-fit"
          >
            <option disabled={true}>Apply Filter</option>
            <option value="descending">High - Low</option>
            <option value="ascending">Low - High</option>
          </select>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {sortedInstalled().map((installedApp) => (
            <InstalledAppCard
              key={installedApp.id}
              installedApp={installedApp}
              setInstalled={setInstalled}
            ></InstalledAppCard>
          ))}
        </div>
      </div>
    );
};

export default Installation;