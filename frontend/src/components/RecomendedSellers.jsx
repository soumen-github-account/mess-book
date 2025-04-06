import React from 'react'
import { sellers } from '../assets/assets'
const RecomendedSellers = () => {
  return (
    <div className='mt-16 hidden lg:block md:block'>
         <p className='lg:text-3xl md:text-2xl text-2xl items-start font-semibold'>Recommended sellers</p>
         <p className='text-base mt-1 text-gray-600'>Top brokers and agents</p>
         <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-2 gap-6'>
           {
             sellers.slice(0,6).map((item,index)=>(
               <div key={index} className='flex border border-gray-400 hover:shadow-xl rounded-lg hover:scale-100 duration-300 cursor-pointer'>
                 <img className='w-10 border-2 border-green-600 h-10 rounded-full mt-3 ml-3' src={item.seller_img} alt="" />
                 <div className='ml-2'>
                   <p className='text-base mt-2 font-semibold'>{item.name}</p>
                   <div className='flex items-center pl-2 mt-2 bg-orange-400 rounded-md h-4 w-32'><p className='text-white text-[12px]'>Housing Expart <span className='text-sm font-bold'>Pro</span></p></div>
                   <div className='flex'>
                   <p className='text-[12px] text-gray-800 font-bold mt-1 mb-1'>{item.experience} <span className='text-gray-500'>experience</span></p>
                   <p className='text-[12px] ml-3 text-gray-500 mt-1 mb-1'>Messes No.-<span className='text-gray-800 font-bold'>{item.messes_no}</span></p>

                   
                   </div>
                 </div>
               </div>
             ))
           }
           
         </div>
       </div>
  )
}

export default RecomendedSellers
