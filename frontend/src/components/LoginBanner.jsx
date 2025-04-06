import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginBanner = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className='flex bg-[#007E85] px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 rounded-md'>
      {/*----------left Side--------- */}
        <div className='flex-1 py-8 sm:px-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Choose your Mess</p>
                <p className='mt-4'>With 100+ Trusted Mess Sellers</p>    
            </div>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default LoginBanner
