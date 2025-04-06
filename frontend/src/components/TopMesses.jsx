import React, { useContext, useState } from 'react'
import { assets, sellers } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'
const TopMesses = () => {
  const {currency, messes} = useContext(SellersContext)

  const [wishList, setWishList] = useState('no')
  const navigate = useNavigate()
  return (
    
    <div className='mt-16'>
      <p className='lg:text-3xl md:text-2xl text-2xl items-start font-semibold'>High-demand projects to invest now</p>
      <p className='text-base mt-1 text-gray-600'>Leading projects in high demand</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 mt-2 gap-6'>
        {
          messes.slice(0,10).map((item,index)=>(
            <div key={index} onClick={()=>navigate(`/mess-book/${item._id}`)} className='flex flex-wrap border border-gray-400 hover:shadow-xl rounded-sm hover:scale-100 duration-300 cursor-pointer'>
              <img className='w-full lg:w-56 ' src={item.image} alt="" />
              <div className='ml-2'>
                <p className='text-base mt-2 font-semibold'>{item.messName}</p>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500  rounded-full'></p><p>Available</p>
                  </div>
                <p className='text-gray-600 text-sm mt-2'>by {item.name}</p>
                <p className='text-sm inline-block overflow-clip'>{item.address.line1}</p>
                <p className='text-sm inline-block'>{item.address.line2}</p>
                <div className='flex'>
                <p className='text-lg font-semibold text-gray-800 lg:mt-3 mt-1 mb-1'>{currency} {item.prices.singel}</p>
                {
                  wishList === 'no' ?
                  <img onClick={()=> setWishList('yes')} src={assets.favorite_img} className='w-8 h-8 lg:ml-60 sm:ml-20 lg:mt-2 ml-10' alt="" />
                  : <img onClick={()=> setWishList('no')} src={assets.heart_img} className='w-8 h-8 lg:ml-60 sm:ml-20 lg:mt-2 ml-10' alt="" />
                }
                
                </div>
              </div>
              
            </div>
          ))
        }
        
      </div>
        <div className='flex justify-center mt-4 w-full'>
        <NavLink to='/messes'>
        <button className='flex bg-blue-500 rounded-full cursor-pointer px-7 text-white py-2 text-base'>Show More <img src={assets.arrow_icon} className='ml-3' alt="" /></button>
        </NavLink>
        </div>
    </div>
  )
}

export default TopMesses
