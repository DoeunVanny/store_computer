import React from 'react'
import g from  '../../assets/images/glorious.webp'
import k from  '../../assets/images/keychron.webp'
import a from  '../../assets/images/akko.webp'
import p  from  '../../assets/images/pulsar.webp'

const cards = [
    {
        'id' : 1,
        'img' : g,
        'name' : 'glorious'
    },
    {
        'id' : 2,
        'img' : k,
        'name' : 'keychron'
    },
    {
        'id' : 3,
        'img' : a,
        'name' : 'akko'
    },
    {
        'id' : 4,
        'img' : p,
        'name' : 'pulsar'
    },
]


export default function CardDevice() {
    return (
    <div className='mt-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2'>
            <div className=' grid grid-cols-2  md:grid-cols-4 gap-4'>
                {
                    cards.map((item)=> (
                        <div key={item.id} className='border -z-10 shadow rounded-xl cursor-pointer relative aspect-square w-full overflow-hidden'>
                        <img src={item.img} className='rounded-xl hover:scale-110 transition-all duration-300' alt="g" />
                         <p className='text-white text-xl lg:text-3xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>{item.name}</p>
                    </div>
                    ))
                }
               
            </div>
    </div>
  )
}
