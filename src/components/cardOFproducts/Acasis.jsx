import React from 'react'

export default function Acasis(prop) {
  const active = prop.oldPrice && prop.price; 
  return (
    <div className=" rounded-xl bg-card text-card-foreground shadow overflow-hidden border border-gray-600 cursor-pointer relative w-full hover:-translate-y-2 transition-all duration-300">
      <img src={prop.img} className='p-2' alt="" />
      <div className="w-[95%] border-[1px] border-black mx-auto "></div>
      <div class=" grow">
        <h4 class="text-black text-left px-2 pt-2 pb-10 ">{prop.name}</h4>
        <div className="items-center w-full absolute bottom-0 p-2 flex flex-row justify-between">
          <p className=" text-lg font-semibold">{prop.brand}</p>
          <div className="flex flex-row items-center justify-start">
            {prop.oldPrice && (
              <p className="text-black line-through text-sm mr-0.5">{prop.oldPrice}$</p>
            )}
            <p  className={ active ?'className="text-xl font-bold text-red-500 ':'text-xl font-semibold'} >{prop.price}$</p>
          </div>
        </div>
      </div>
      
    </div>

  )
}
