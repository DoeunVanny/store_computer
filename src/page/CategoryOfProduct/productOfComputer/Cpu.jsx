import React from 'react'
import Acasis from '../../../components/cardOFproducts/Acasis'
import { ADM, Intel } from '../../../store/Categories/Cpu'


export default function Cpu() {
  return (
    <>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className="text-center text-2xl font-bold my-5">CPU</h1>
         <h1 className=" underline text-xl mb-3 font-bold  ">ADM</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {ADM.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Intel</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Intel.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      </>
  )
}
