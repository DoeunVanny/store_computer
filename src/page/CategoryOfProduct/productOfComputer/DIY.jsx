import React from 'react'
import Acasis from '../../../components/cardOFproducts/Acasis'
import { Akko } from '../../../store/Categories/DIY'

export default function DIY() {
  return (
    <div className="mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2">
    <h1 className="text-center text-2xl font-bold my-5">DIY</h1>
    <h1 className=" underline text-xl mb-3 font-bold  ">Akko</h1>
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
      {Akko.map((item) => (
        <Acasis {...item} key={item.id} />
      ))}
    </div>
  </div>
  )
}
