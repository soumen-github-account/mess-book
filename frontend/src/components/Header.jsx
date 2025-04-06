import React, { useContext, useState } from 'react'
import { assets, sellers } from '../assets/assets'
import { Link } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'

const Header = () => {
  const { messes,setShowSearch } = useContext(SellersContext)
  
  const [query, setQuery] = useState('')
  return (
    <div className='min-h-96 rounded-2xl mb-4 w-full bg-center bg-cover flex items-center overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}}>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h3 className='text-2xl mb-3 sm:text-4xl md:text-[60px] inline-block max-w-3xl font-semibold pt-20'>
        Explore Mess that fit your like.
        </h3>
        {/* <div className='flex items-center justify-center w-full mt-6'>
          <input className='flex items-center w-80 pl-5 text-slate-700 outline-none bg-slate-200 h-9 rounded-full' type="text" placeholder='Search any city, location or pkaces' />
          <button className='bg-[#3D8D7A] rounded-full w-24 h-9 ml-2 cursor-pointer text-sm'>Search</button>
        </div> */}
        <Link to='/messes'>
        <div className='flex items-center justify-center bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
          
          <div className='flex w-full items-center' onClick={()=>setShowSearch(true)}>
            <img src={assets.serach_icon} className='w-3 lg:w-6 md:w-5 sm:w-4' alt="" />
            <input type="text" onChange={(e)=>setQuery(e.target.value)} className='max-sm:text-xs p-2 rounded outline-none w-full' />
            
          </div>
          
          {/* <button className='bg-blue-600 px-4 py-1 lg:px-6 lg:py-2 rounded text-white m-1'>Search</button> */}

        </div>
        </Link>
        {/* <div className={`absolute bg-white items-center justify-center lg:ml-50 lg:w-[72vh] w-[30vh] sm:w-[50vh] ml-6 rounded mt-0.5 ${query=='' ? 'hidden' :''} `}>
            <ul className='lg:min-w-[70vh] w-full rounded'>
                {
                  messes.filter(add=>add.address.line1.toLowerCase().includes(query)).map((item,index)=>(
                    <Link key={index} to={`/messes/${item.address.line1}`}>
                    <li className='hover:bg-gray-600 p-1 text-black hover:text-white rounded lg:min-w-[70vh] mt-1 border-b'>{item.address.line1}</li>
                    </Link>
                  ))
                }
            </ul>
        </div>     */}
      </div>
    </div>
  )
}

export default Header
