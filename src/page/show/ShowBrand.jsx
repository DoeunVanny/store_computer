import React from 'react'
import { Brands } from '../../store/ImageBrand'
import CardBrand from '../../components/card/CardBrand'

export default function ShowBrand() {
  return (
    <div className='mt-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2'>
         <div className="grid  grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
           {
                      Brands.map((item) => (
                        
                           <CardBrand {...item} key={item.id} />
                      ))
                   }
         </div>
         
    </div>
  )
}
