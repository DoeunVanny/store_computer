import React from 'react'
import Acasis from '../../../components/cardOFproducts/Acasis'
import { ipega, Logitech, playstation, Xbox } from '../../../store/Categories/Controller'
playstation
export default function Controller() {
  return (
    <> 
       <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className="text-center text-2xl font-bold my-5">Controller</h1>
         <h1 className=" underline text-xl mb-3 font-bold  ">Logitech</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Logitech.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
         <h1 className=" underline text-xl mb-3 mt-3 font-bold  ">Xbox</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Xbox.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
         <h1 className=" underline text-xl mb-3 mt-3 font-bold  ">ipega</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {ipega.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
         <h1 className=" underline text-xl mb-3 mt-3 font-bold  ">playstation  </h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {playstation.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}
