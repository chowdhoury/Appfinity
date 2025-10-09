import React, { use, useState } from 'react';
import AppCard from '../../Components/AppCard/AppCard';
import AppError from '../AppError/AppError';
import useApps from '../../Hooks/useApps';
import SkeletonLoader from '../../Components/SkeletonLoader/SkeletonLoader';

const Apps = () => {
  const { apps } = useApps();
  const [appSearch, setAppSearch] = useState('');
  const searchedApp=apps.filter(appData=>appData.title.toLowerCase().includes(appSearch.trim().toLowerCase()))
  return (
    <div className="px-2 lg:px-20">
      <div className="text-center">
        <h2 className="text-5xl text-[#001931] font-bold">
          Our All Applications
        </h2>
        <p className="text-[20px] text-[#627382] mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <h3 className="text-2xl text-[#001931] font-semibold">
          ({searchedApp.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            value={appSearch}
            onChange={(e) => setAppSearch(e.target.value)}
            placeholder="Search App"
            className="outline-none w-full bg-transparent"
          />
        </label>
      </div>
      <SkeletonLoader/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchedApp.length > 0 ? (
          searchedApp.map((trendingApp) => (
            <AppCard key={trendingApp.id} trendingApp={trendingApp} />
          ))
        ) : ''}
      </div>
      {searchedApp.length===0?<AppError></AppError>:''}
    </div>
  );
};

export default Apps;