
import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Categories from '../Category'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../Context/UserContext'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import Cart2 from '../Components/Cart2'

const Home = () => {

  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  // Category Filter
  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      )
      setCate(newList)
    }
  }

let items=useSelector(state=>state.cart)

let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)

let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes)
  

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />

      {/* Categories */}
      {!input ? (
        <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
          {Categories.map((item) => (
            <div
              key={item.name}
              className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 
              justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl 
              hover:bg-green-200 cursor-pointer transition-all duration-200'
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      {/* FOOD CARDS */}
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.length>1?
        cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )):
        <div className='text-center text-2xl text-green-500 font-semibold  pt-5'>
          No Dish Found..
          </div>}
        
      </div>

      {/* SLIDE CART */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white flex flex-col items-center
        shadow-xl p-6 transition-all duration-500  overflow-auto
        ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Cart Header */}
        <header className='w-full flex justify-between items-center mb-5'>
          <span className='text-green-500 text-[18px] font-semibold'>
            Order Items..
          </span>
          <RxCross2
            className='w-[30px] h-[30px] cursor-pointer text-green-500 hover:text-gray-600'
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length>0?
         <>

        <div className='w-full mt-9 flex flex-col gap-8'>
          {items.map((item)=>(
          <Cart2  name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}
          />
        ))}

        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex
        flex-col gap-2 p-8'>

          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold  '>Subtotal</span>
            <span className='text-green-400 font-semibold text-md'>Rs{subtotal}/</span>
          </div>
         <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold  '>Delivery fee</span>
            <span className='text-green-400 font-semibold text-md'>Rs{deliveryFee}/</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold  '>Taxes</span>
            <span className='text-green-400 font-semibold text-md'>Rs{taxes}/</span>
          </div>

        </div>
         <div className='w-full flex justify-between items-center p-8'>
            <span className='text-2xl text-gray-600 font-semibold  '>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>Rs{total}/</span>
          </div>
          <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all'
          onClick={
            ()=>{
               toast.success("order placed..")
            }
          }>Place Order...</button>
          </>:
          <div className='text-center text-2xl text-green-500 font-semibold  pt-5'>Empty Cart...</div>
        
        }
       

        
      </div>
      
    </div>
  )
}

export default Home