import React, { Suspense, use, useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Loader from "../../Pages/Loader/Loader";


const Root = () => {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = React.useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const isNavigating = navigation.state !== "idle";

  if (initialLoading) {
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
      {isNavigating && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <Loader></Loader>
        </div>
      )}
    </div>
  );
};

export default Root;
