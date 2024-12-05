import React from "react";
import { acasis, aula, bemorergo, glorious, jonsbo, keychron, logitech, mcdodo, nuoxi, NZXT, razer, redragon, ugreen } from "../../../store/Categories/Accessory";
import Acasis from "../../../components/cardOFproducts/Acasis"; 


export default function Accessory() {
  return (
    <>
      
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className="text-center text-2xl font-bold my-3">Accessory</h1>
         <h1 className=" underline text-xl mb-3 font-bold  ">Acasis</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {acasis.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Aula</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {aula.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Bemorergo</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {bemorergo.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Glorious</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {glorious.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Jonsbo</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {jonsbo.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Keychron</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {keychron.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Logitech</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {logitech.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Mcdodo</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {mcdodo.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">NZXT</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {NZXT.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Nuoxi</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {nuoxi.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Razer</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {razer.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Redragon</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {redragon.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
         <h1 className=" underline text-xl mb-3 font-bold  ">Ugreen</h1>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
          {ugreen.map((item) => (
            <Acasis {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
