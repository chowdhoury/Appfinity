import React from 'react';

const Stats = () => {
    return (
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] px-2 lg:px-20 py-20">
        <h1 className="text-5xl font-bold text-white text-center mb-10">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-25 lg:gap-35 ">
          <div className="text-center">
            <small className="text-white opacity-80">Total Downloads</small>
            <h1 className="text-white text-[64px] font-extrabold">29.6M</h1>
            <small className="text-white opacity-80">
              21% more than last month
            </small>
          </div>
          <div className="text-center">
            <small className="text-white opacity-80">Total Reviews</small>
            <h1 className="text-white text-[64px] font-extrabold">906K</h1>
            <small className="text-white opacity-80">
              46% more than last month
            </small>
          </div>
          <div className="text-center">
            <small className="text-white opacity-80">Active Apps</small>
            <h1 className="text-white text-[64px] font-extrabold">132+</h1>
            <small className="text-white opacity-80">31 more will Launch</small>
          </div>
        </div>
      </div>
    );
};

export default Stats;