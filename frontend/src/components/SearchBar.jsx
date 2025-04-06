import React, { useContext, useEffect, useState } from 'react'
import { SellersContext } from '../context/SellersContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(SellersContext)
    const location = useLocation()
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        if(location.pathname.includes('messes')){
            setVisible(true)
        } else{
            setVisible(false)
        }
        // console.log(location.pathname)
    },[location])
    return showSearch && visible ? (
    <div className='bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search messes by Address' />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-5 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
