import React, { useContext, useEffect, useState } from 'react'
import { SellersContext } from '../context/SellersContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyStore = () => {

  const {backendUrl, token, getMessData } = useContext(SellersContext)
  
  const [favourite, setFavourite] = useState([])

  const getUserAppointment = async ()=>{
    try {
      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})
      if(data.success){
        setFavourite(data.favouritelist)
      console.log(data.favouritelist)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(token){
      getUserAppointment()
    }
  },[token])
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Store</p>
      <div>
          {
            favourite.map((item,index) =>(
              <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                <div>
                  <img className='w-20 h-20 bg-indigo-50' src={item.messData.image} alt="" />
                </div>
                <div className='flex-1 text-sm text-zinc-600'>
                  <p className='text-neutral-800 font-semibold'>{item.messData.messName}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                  <p className='text-xs'>{item.messData.address.line1}</p>
                  <p className='text-xs'>{item.messData.address.line2}</p>
                  
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default MyStore
