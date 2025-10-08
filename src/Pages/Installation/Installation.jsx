import React, { useEffect, useState } from 'react';
import InstalledAppCard from '../../Components/InstalledAppCard/InstalledAppCard';

const Installation = () => {
  const [installed, setInstalled] = useState([])
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installed"));
    setInstalled(installedList)
    // console.log(installedList)
  },[])
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
            1 Apps Found
          </h3>
          <select defaultValue="Sort By Size" className="select w-fit">
            <option>Sort By Size</option>
            <option>Low - High</option>
            <option>High - Low</option>
          </select>
            </div>
        <div className='mt-4 flex flex-col gap-4'>
          {
            installed.map(installedApp=><InstalledAppCard key={installedApp.id} installedApp={installedApp}></InstalledAppCard>)
          }
            </div>
      </div>
    );
};

export default Installation;