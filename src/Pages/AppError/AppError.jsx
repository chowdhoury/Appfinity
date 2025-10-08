import React from 'react';
import errorApp from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
      <div className=" px-2 lg:px-20">
        <div className="justify-items-center text-center">
          <img src={errorApp} alt="" />
          <h1 className="text-5xl text-[#001931] font-bold mt-10">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-[#627382] text-[20px] mb-4 mt-2">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <div>
            <Link to={"/"}>
              <button className="cursor-pointer flex items-center gap-[10px] rounded-sm bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-[#FFF] px-4 py-3 text-[16px] font-semibold">
                <h2>Back to Home</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AppError;