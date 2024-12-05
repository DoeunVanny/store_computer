import React from 'react'
import Acasis from '../../../components/cardOFproducts/Acasis'
import { jonsbo } from '../../../store/Categories/Accessory'
import { NZXT } from '../../../store/Categories/Cooler'


export default function Cooler() {
  return (
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
            <h1 className="text-center text-2xl font-bold my-5">Cooler</h1>
            <h1 className=" underline text-xl mb-3 font-bold  ">Jonsbo</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
            {jonsbo.map((item) => (
            <Acasis {...item} key={item.id} />
            ))}
        </div>
            <h1 className=" underline text-xl mt-3 mb-3 font-bold  ">Jonsbo</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
            {NZXT.map((item) => (
            <Acasis {...item} key={item.id} />
            ))}
        </div>
   </div>
  )
}
