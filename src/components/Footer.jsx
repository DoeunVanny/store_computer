import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      
      <hr className="mt-5 border-gray-200 " />
      <div className="w-full bg-gray-50">
      <div className="  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 p-2">
          <div>
               <h1 className="font-bold text-left  text-xl">About Us</h1>
               <div className="flex mt-5  items-center">
                   <div className="mr-5">
                    <IoCalendarOutline className="text-5xl text-[#707070]" />
                   </div>
                   <div>
                       <p>Monday to Sunday <br />9:00 AM - 8:00 PM</p>
                   </div>
               </div>
               <div className="flex mt-7 ">
                   <div className="mr-5">
                     <FaSquarePhone className="text-5xl text-[#707070]" />
                   </div>
                   <div>
                       <p>096 65 17 982<br />096 65 17 982</p>
                   </div>
               </div>
          </div>
          <div>
          
               <div className="flex mt-12">
                   <div className="mr-5">
                      <FaTelegram className="text-5xl text-[#707070]" />
                   </div>
                   <div>
                       <p> (885) 96 65 17 982 <br />@Doeun_Vanny</p>
                   </div>
               </div>
               <div className="flex mt-8">
                   <div className="mr-5">
                    <FaFacebook className="text-5xl text-[#707070]"/>
                   </div>
                   <div>
                       <p>Doeun Vanny<br />vdcomputerstore</p>
                   </div>
               </div>
          </div>
          <div className="col-span-2  md:col-span-1 ">
                 <h3 className=" text-gray-400">In Store Services / Delivery to 25 cities and provinces</h3>
                 <div className="flex mt-5">
                    <div className="mr-5">
                        <FaMapMarkerAlt className="text-5xl text-[#707070]"/>
                    </div>
                    <div>#130 ,St07 ,sangkat teuk thla , khan sensok , phnom penh</div>
                 </div>
          </div>
        </div>
      </div>
            <h3 className="text-center mt-5 mb-5 text-slate-400">Copyright 2024© TK ComputerStore / SpectorGear. All Right Reserved.</h3>
      </div>
    </>
  );
}
