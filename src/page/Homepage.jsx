import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import ShowProductOfComputer from './show/ShowProductOfComputer'
import G from './../assets/images/Glorious_Logo_44.webp'
import M from './../assets/images/Model_O_Pro.webp'
import CardDevice from '../components/card/CardDevice'
import ShowBrand from './show/ShowBrand'
import ShowDevices from './show/ShowDevices'
import ShowProductsMouse from './show/ShowProductsMouse'
import FeaturedProduct from './show/FeaturedProduct'


export default function Homepage() {

    const navigate = useNavigate()
  return (
    <>
         <section>
             <Banner/>
        </section>
        <section>
             <ShowProductOfComputer/>
        </section>
        <section>
            <div className=' hidden md:block w-full bg-slate-200 mt-4 '>
            <div className=' w-[82%] mx-auto flex-row flex justify-between items-center'>
                 <div className='flex flex-row items-center justify-center max-w-screen-xl mx-auto'>
                      <img src={G} width="200px" height="200px" alt="g" />
                 </div>
                 <div >
                      <p className='grow px-2 text-slate-600 text-sm'>Peak gaming performance at just 55 grams lightweight. Over 80 hours of battery life. Once you try this wireless mouse, there's no going back.</p>
                 </div>
                 <div className='grow px-2 text-slate-600 text-sm'>
                    <img src={M} width="300px" height="100px"  alt="m" />
                 </div>
            </div>
            </div>
        </section>
        <section>
             <CardDevice/>
        </section>
        <section>
              <ShowBrand/>
        </section>
        <section>
            <div className='   w-full bg-slate-200 mt-4 '>
            <div className=' w-[82%] mx-auto flex-col flex  items-center'>
                 <div >
                      <p className='grow pt-2 pb-[2px] text-slate-600 font-semibold text-xl'>Featured Products</p>
                 </div>
                 <div>
                      <p className=' pb-2 text-slate-600'> Explore our Recommendation</p>
                 </div>
            </div>
            </div>
        </section>
        <section>
          <FeaturedProduct/>
        </section>
        <section>
            <div className='   w-full bg-slate-200 mt-4 '>
            <div className=' w-[82%] mx-auto flex-col flex  items-center'>
                 <div >
                      <p className='grow pt-2 pb-[2px] text-slate-600 font-semibold text-xl'>New Arrivals</p>
                 </div>
                 <div>
                      <p className=' pb-2 text-slate-600'>Explore our latest products to stock</p>
                 </div>
            </div>
            </div>
        </section>
        <section>
             <ShowDevices/>
        </section>
        <section>
            <div className=' w-full bg-slate-200 mt-4 '>
            <div className=' w-[82%] mx-auto flex-col flex  items-center'>
                 <div >
                      <p className='grow pt-2 pb-[2px] text-slate-600 font-semibold text-xl'>Special Discount</p>
                 </div>
                 <div>
                      <p className=' pb-2 text-slate-600'>Get the items will great deal today !</p>
                 </div>
            </div>
            </div>
        </section>
        <section>
            <ShowProductsMouse/>
        </section>
        
        
    </>
     
  )
}
