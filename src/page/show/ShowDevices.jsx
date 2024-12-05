import React from 'react'
import CardDevices from '../../components/card/CardDevices'
import { Devices } from '../../store/ImageDevices'
Devices

export default function ShowDevices() {
  return (
    <div className='mt-5 mb-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2'>
         <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
               {
                  Devices.map((item) => (
                      <CardDevices {...item} key={item.id} />
                  ))
               }
         </div>
    </div>
  )
}
