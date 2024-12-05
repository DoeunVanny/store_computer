import React from 'react'

export default function CardBrand(props) {
  return (
    <div className="border-[1px] p-2 border-black w-full aspect-square  rounded-xl  shadow-md transform transition duration-300 hover:-translate-y-2">
      <img src={props.img} alt="photo" />
    
    </div>
  )
}
