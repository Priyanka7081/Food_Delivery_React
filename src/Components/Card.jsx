import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from './Redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({name,image,id,price,type}) => {
  let dispatch=useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg
     hover:border-2 border-green-300 cursor-pointer'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
           <img src={image} alt="" />
      </div>
      <div className='text-2xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center'>
       <div className='text-xl font-bold text-green-500'> Rs {price}</div>
       <div className='flex justify-center items-center gap-2 text-green-500 font-semibold'>
        {type==="veg"?<LuLeafyGreen /> :<GiChickenOven />} 
       <span>{type}</span></div>
      


      </div>
      <button className='w-full p-3 bg-green-400 rounded-lg text-gray-700 hover:bg-green-500 text-white cursor-pointer
      transition-all ' onClick={()=>
        {dispatch(AddItem({id:id, name:name,price:price,image:image,
        qty:1
      }));
      toast.success("item added")}
      }>Add to cart</button>
    </div>
  )
}

export default Card