import React from 'react'
import { assets, specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-6 gap-4' id='speciality'>
      {
        specialityData.map((item, index)=>(
        <Link key={index} className='bg-slate-200 rounded-b-sm' to={`/messes/${item.speciality}`}>
          <img className='w-72' src={item.image} alt="" />
          <p className='flex lg:my-3 lg:mx-3 my-2 mx-2'>{item.name}
            {/* <img className='ml-3 mt-1 w-2' src={assets.right_arrow} alt="" /> */}
          </p>
        </Link>
        ))
      }
      
    </div>
  )
}

export default Speciality
