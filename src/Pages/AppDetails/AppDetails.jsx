import React from "react";
import demo from "../../assets/demo-app (1).webp";
import downloadImg from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
    const id = useParams()
    const appId=parseInt(id.appId)
    const appsData = useLoaderData();
    // console.log(appId);
    // console.log(appsData);
    const appData = appsData.find(app => app.id === appId)
    console.log(appData);
    const { image, title, companyName, downloads, ratingAvg, reviews, size, description} = appData;
  return (
    <div className="mt-20 px-2 lg:px-20">
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="h-full">
          <img
            src={image}
            className="w-[350px] h-100 object-cover rounded-sm"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:block">
          <h2 className="text-[32px] text-[#001931] font-bold text-center md:text-start">
            {title}
          </h2>
          <p className="text-[20px] text-[#627382] text-center md:text-start">
            Developed by{" "}
            <span className="font-semibold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              {companyName}
            </span>
          </p>
          <hr className="w-full text-[#001931] opacity-20 my-[30px]" />
          <div className="flex md:flex-row flex-col md:gap-20 gap-5">
            <div>
              <img className="h-10" src={downloadImg} alt="" />
              <p className="text-[#001931] opacity-80 my-2">Downloads</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold">
                {downloads / 1000000000000 >= 1
                  ? `${downloads / 1000000000000}T`
                  : downloads / 1000000000 >= 1
                  ? `${downloads / 1000000000}B`
                  : downloads / 1000000 >= 1
                  ? `${downloads / 1000000}M`
                  : `${downloads / 1000}K`}
              </h1>
            </div>
            <div>
              <img className="h-10" src={ratings} alt="" />
              <p className="text-[#001931] opacity-80 my-2">Average Ratings</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div>
              <img className="h-10" src={review} alt="" />
              <p className="text-[#001931] opacity-80 my-2">Total Reviews</p>
              <h1 className="text-[40px] text-[#001931] font-extrabold">
                {reviews / 1_000_000_000_000 >= 1
                  ? `${(reviews / 1_000_000_000_000).toFixed(1)}T`
                  : reviews / 1_000_000_000 >= 1
                  ? `${(reviews / 1_000_000_000).toFixed(1)}B`
                  : reviews / 1_000_000 >= 1
                  ? `${(reviews / 1_000_000).toFixed(1)}M`
                  : `${(reviews / 1_000).toFixed(1)}K`}
              </h1>
            </div>
          </div>
          <button className="text-white text-[20px] font-semibold px-5 py-4 rounded-sm bg-[#00D390] mt-[30px] cursor-pointer">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr className="w-full text-[#001931] opacity-20 my-[40px]" />
          <div>
              ok
      </div>
      <hr className="w-full text-[#001931] opacity-20 my-[40px]" />
      <div>
        <h3 className="text-2xl text-[#001931] font-semibold text-center md:text-start">Description</h3>
        <p className="text-[20px] text-[#627382] mt-6 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
