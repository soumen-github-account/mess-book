import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='m-auto mt-4 text-[2vw] text-center font-medium' id='app-download'>
    <p>For Better Experience Download <br /> Asthana App</p>
  <div className="flex justify-center gap-3 mt-2">
    <img className='w-[30vw] max-w-[180px] transition cursor-pointer' src={assets.play_store} alt="" />
    <img className='w-[30vw] max-w-[180px] transition cursor-pointer' src={assets.app_store} alt="" />
  </div>
</div>
  )
}

export default Banner
