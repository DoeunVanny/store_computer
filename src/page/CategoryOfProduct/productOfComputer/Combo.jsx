import React from 'react'
import { Akko, Aula, iMice, Logitech, Onikuma, Redragon, Ziyoulang } from '../../../store/Categories/Combo'
import Acasis from '../../../components/cardOFproducts/Acasis'


export default function Combo() {
  return (
    <>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className="text-center text-2xl font-bold my-5">Combo</h1>
         <h1 className=" underline text-xl mb-3 font-bold  ">Akko</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Akko.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Aula</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Aula.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Logitech</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Logitech.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Onikuma</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Onikuma.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Redragon</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Redragon.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Ziyoulang</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {Ziyoulang.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">iMice</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {iMice.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      </>
  )
}
