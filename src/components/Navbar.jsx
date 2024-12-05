import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Search from './Search';
import Brand2 from '../page/Brand2';
import Category from '../page/Category';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isTooltipVisibleSearch, setIsTooltipVisibleSearch] = useState(false);

  const handleToggleSearch = () => {
       setIsTooltipVisibleSearch(!isTooltipVisibleSearch);
  };
  const [isTooltipVisibleBrand, setIsTooltipVisibleBrand] = useState(false);

  const handleToggleBrand = () => {
       setIsTooltipVisibleBrand(!isTooltipVisibleBrand);
  };
  const [isTooltipVisibleCategory, setIsTooltipVisibleCategory] = useState(false);

  const handleToggleCategory = () => {
       setIsTooltipVisibleCategory(!isTooltipVisibleCategory);
  };
  return (
    
              <div className=' w-[100%]  cursor-pointer shadow-md  flex justify-between bg-white py-4 md:py-5'>
                    <ul className='flex '>
                       <li className='mr-3 ml-5  hover:underline '>
                              <Link to="/" >Home</Link>
                       </li>
                       <li className='mr-3'>
                             <span className='px-[0.5px] py-2 bg-slate-200' ></span>
                       </li>
                       <li className='mr-3  hover:underline' >
                            <span onClick={handleToggleBrand}>
                                  Brands
                             </span>
                            
                       </li>
                       <li className='mr-3  hover:underline'>
                              <span className='px-[0.5px] py-2 bg-slate-200' ></span>
                       </li>
                       <li className='mr-3 '>
                             <span onClick={handleToggleCategory}>
                                    Categories
                             </span>
                       </li>
                    </ul>
                    <div className='mr-5 absolute text-xl top-1/2 right-4 -translate-y-1/2 '>
                       <button   onClick={handleToggleSearch}>
                           <IoSearch className='hover:border-gray-700 hover:border-b-2'/>
                       </button>
                    </div>
                    {isTooltipVisibleSearch && (<Search/>)}
                    {isTooltipVisibleBrand && (<Brand2/>)}
                    {isTooltipVisibleCategory && (<Category/>)}
              </div>
     
  )
}
