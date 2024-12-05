import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <div className="text-center py-0.5 bg-black text-white text-sm  md:text-base">
           All products are original and brand new
      </div>
      <div className="lg:w-[90%] xl:w-[82%] mx-auto sticky top-0   z-10  mb-2">
        <Navbar />
      </div>
      <main className="">
        <Outlet />
      </main>
      <footer>
            <Footer/>
        </footer>
    </>
  );
}
