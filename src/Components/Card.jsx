import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";

const Card = ({name,image,id,price,type}) => {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
           <img src={image} alt="" />
      </div>
      <div className='text-2xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
       <div className='text-xl font-bold text-green-500'> Rs {price}</div>
       <div className='flex justify-center items-center gap-2 text-green-500 font-semibold'> <LuLeafyGreen /> 
       <span>{type}</span></div>
      


      </div>
      <button className='w-full p-3 bg-green-400 rounded-lg text-gray-700 hover:bg-green-500
      transition-all'>Add to cart</button>
    </div>
  )
}

export default Card