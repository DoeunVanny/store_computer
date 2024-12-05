import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const categories = [
  "Accessory",
  "CPU",
  "Combo",
  "Controller",
  "Cooler",
  "Cooling pad",
  "Custom PC",
  "DIY",
  "Fan",
  "Graphic Card (VGA)",
  "Headphone",
  "Keyboard",
  "Keycaps",
  "Light Strip",
  "Microphone",
  "Monitor",
  "Motherboard",
  "Mouse",
  "Mousepad",
  "PC Case",
  "Power Supply Unit (PSU)",
  "RAM",
  "Speaker",
  "Storage",
  "Switch",
  "Table / Chair",
  "Webcam",
];

export default function Search() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);
  const handleToggle = () => {
    setIsTooltipVisible(false);
  };
  const [isOpenC, setIsOpenC] = useState(false);
  const toggleDropdownC = () => {
    setIsOpenC(!isOpenC);
  };
  const [isOpenB, setIsOpenB] = useState(false);
  const toggleDropdownB = () => {
    setIsOpenB(!isOpenB);
  };
  const [selectedCategories, setSelectedCategories] = useState([]);
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  
  return (
    <>
      {isTooltipVisible && (
        <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div className="fixed left-[50%] top-[50%] bg-white z-50 w-full translate-x-[-50%] translate-y-[-50%] gap-4  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-screen-xl border overflow-y-scroll max-h-[95vh] p-0 rounded-lg h-full flex flex-col">
            <div className="py-4 px-2 w-full  bg-white shadow-lg">
              <h4 className="text-center text-xl font-bold underline">
                Search
              </h4>
              <span className=" absolute right-2 top-4">
                <button onClick={handleToggle}>
                  <CiCircleRemove className="text-3xl" />
                </button>
              </span>
            </div>
            <div className="w-[98%]  mx-auto">
              <div className="shadow-sm">
                <input
                  type="text"
                  name=""
                  // value={searchTerm}
                  // onChange={handleSearchChange}
                  className="w-full  h-9 px-12 border rounded-xl py-3"
                  placeholder="Search Products ...."
                  id=""
                />
                <IoSearch className=" absolute left-6 md:left-8  top-[88px] text-slate-400" />
              </div>

              <div className="px-3 py-3 mt-2 bg-blue-200 rounded-md shadow-md duration-1000 animate-fadeIn">
                <div
                  onClick={toggleDropdownC}
                  className="flex justify-between gap-2 items-center"
                >
                  <h2 className="text-lg font-bold ">Category</h2>
                  <div className="">
                    {" "}
                    {isOpenC ? <FaChevronUp /> : <FaChevronDown />}{" "}
                  </div>
                </div>
                {isOpenC && (
                  <div className="flex flex-wrap gap-2 mt-4 ">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedCategories.includes(category) ? "bg-blue-500 text-white" : "bg-white text-black"} transition duration-300 ease-in-out`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-3 py-3 mt-2 bg-blue-200 rounded-md shadow-md duration-1000 animate-fadeIn">
                <div
                  onClick={toggleDropdownB}
                  className="flex  justify-between gap-2 items-center"
                >
                  <h2 className="text-lg font-bold ">Brand</h2>
                  <div className="">
                    {" "}
                    {isOpenB ? <FaChevronUp /> : <FaChevronDown />}{" "}
                  </div>
                </div>
                {isOpenB && (
                  <div className="flex flex-wrap gap-2 mt-4 ">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`px-4 py-2 rounded-lg border ${
                          selectedCategories.includes(category)
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        } transition duration-1000 ease-in-out`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-2 font-semibold text-base">
                Price Range: $0-$500
              </div>
              <div className="w-full items-center flex">
                <span className="h-3 w-3 border-[2px] border-gray-500 rounded-full"></span>
                <span className="h-1 w-[100%] bg-black"></span>
                <span className="h-3 w-3 border border-gray-500 rounded-full"></span>
              </div>
              <div className="text-center mt-2 ">
                <button
                  className="px-16 bg-black text-white rounded-lg py-2 border mx-2"
                  // onClick={ handleSearchClick }
            
                >
                  Search
                </button>
                <button
                  // onClick={() => setSearchTerm("")}
                  className="px-16 bg-red-500 text-white rounded-lg py-2 border mx-2"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded">
            <p>{product.name}</p>
          </div>
        ))}
      </div> */}
              
          </div>
        </div>
      )}

      
    </>
  );
}
