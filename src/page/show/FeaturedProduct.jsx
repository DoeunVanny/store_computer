import React from 'react'
import CardProductsMouse from '../../components/card/CardProductsMouse'
import { Glorious } from '../../store/FeaturedProducts'


export default function FeaturedProduct() { 
  return (
    <div className='mt-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2'>
    <div className=' grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-4'>
              {
                 Glorious.map((item) => (
                    <CardProductsMouse {...item} key={item.id}/>
                 ))
              }
    </div>
   </div>
  )
}
