import React, {useEffect, useState } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Loader from "../../Pages/Loader/Loader";


const Root = () => {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  const isNavigating = navigation.state === "loading";

  if (initialLoading || isNavigating) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto">
        <Header></Header>
        <div className="py-20 bg-[#F5F5F5]">
          <Outlet></Outlet>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
