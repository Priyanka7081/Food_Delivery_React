
import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../Context/UserContext';

const Nav = () => {
    let { input, setInput } = useContext(dataContext)

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            
            {/* Logo */}
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md'>
                <MdFastfood className='w-[30px] h-[30px] text-green-600' />
            </div>

            {/* Search */}
            <form 
                className='w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md'
                onSubmit={(e)=>e.preventDefault()}
            >
                <IoSearchSharp className='text-green-600 w-[20px] h-[20px]' />
                <input
                    type="text"
                    placeholder='Search Items...'
                    className='w-full outline-none text-[16px] md:text-[20px]'
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                />
            </form>

            {/* Cart */}
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative'>
                <span className='absolute top-0 right-2 text-green-600 font-bold text-[18px]'>0</span>
                <FiShoppingBag className='w-[30px] h-[30px] text-green-600' />
            </div>

        </div>
    )
}

export default Nav