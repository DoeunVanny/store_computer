import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { Categories } from '../store/ImageCategory';
import ProductOfComputer from '../components/card/ProductOfComputer';

export default function Category() {

    const [isTooltipVisible, setIsTooltipVisible] = useState(true);

    const handleToggle = () => {
       setIsTooltipVisible(false);
    };

  return (
    <>
    {isTooltipVisible && (
        <div className='fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
        <div className='fixed left-[50%] top-[50%] bg-white z-50 w-full translate-x-[-50%] translate-y-[-50%] gap-4  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-w-screen-xl border overflow-y-scroll max-h-[95vh] p-0 rounded-lg h-full flex flex-col'>
           <div className='py-4 px-2 w-full  bg-white shadow-lg'>
                 <h4 className='text-center text-xl font-bold '>Categories</h4>
                 <span className=' absolute right-2 top-4'>
                     <button onClick={handleToggle} ><CiCircleRemove className='text-3xl' /></button>
                 </span>
                 </div> 
                 <div className=' px-3 pb-3'>
                 <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {
                     Categories.map((item) => (
                       
                          <ProductOfComputer {...item} key={item.id} />
                     ))
                  }
        </div>
                 </div>
         </div>
       </div> 
   
      )}
      </>
  )
}
