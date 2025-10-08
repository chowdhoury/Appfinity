import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Suspense fallback={<h1>Loading..</h1>}>
        <Header></Header>
        <div className="py-20 bg-[#F5F5F5]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </Suspense>
    </div>
  );
};

export default Root;
