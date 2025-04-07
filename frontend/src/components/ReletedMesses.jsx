
import React, { useContext, useState } from 'react'
import { assets, sellers } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'
const ReletedMesses = () => {
  const {currency,messes} = useContext(SellersContext)
  const navigate = useNavigate()
  // const [wishList, setWishList] = useState('no')
  return (
    <div className='mt-16'>
    <p className='lg:text-3xl md:text-2xl text-2xl items-start font-semibold'>Releted messes</p>
    {/* <p className='text-base mt-1 text-gray-600'>Leading projects in high demand</p> */}
    <div className='grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 mt-4 gap-6'>
      {
        messes.slice(0,10).map((item,index)=>(
          <div key={index} onClick={()=>navigate(`/mess-book/${item._id}`)} className='flex flex-wrap border border-gray-400 hover:shadow-xl rounded-sm hover:scale-100 duration-300 cursor-pointer'>
            <img className='w-full lg:w-56' src={item.image} alt="" />
            <div className='ml-2'>
              <p className='text-base mt-2 font-semibold'>{item.mess_name}</p>
              <div className='flex items-center gap-2 text-sm text-center text-green-800'>
              <p className='w-2 h-2 bg-green-800  rounded-full'></p><p>Available</p>
              </div>
              <p className='text-gray-600 text-sm mt-2'>by {item.name}</p>
              <p className='text-sm inline-block overflow-clip'>{item.address?.line1}</p>
              <p className='text-sm inline-block'>{item.address?.line2}</p>
              <div className='flex'>
              <p className='text-lg font-semibold text-gray-800 lg:mt-3 mt-1 mb-1'>{currency} {item.prices?.singel ? item.prices?.singel : item.prices?.double ? item.prices?.double : item.prices?.triple ? item.prices?.triple : item.prices?.quarter}</p>
              {/* {
                wishList === 'no' ?
                <img onClick={()=> setWishList('yes')} src={assets.favorite_img} className='w-8 h-8 lg:ml-60 sm:ml-20 lg:mt-2 ml-10' alt="" />
                : <img onClick={()=> setWishList('no')} src={assets.heart_img} className='w-8 h-8 lg:ml-60 sm:ml-20 lg:mt-2 ml-10' alt="" />
              } */}
              
              </div>
            </div>
            
          </div>
        ))
      }
      
    </div>

  </div>
  )
}

export default ReletedMesses
