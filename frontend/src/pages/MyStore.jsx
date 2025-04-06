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
                <div className='flex flex-col gap-2 justify-end'>
                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>
                  {/* {!item.cancelled && !item.isCompleted && <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-sm cursor-pointer hover:bg-[#5f6FFF] hover:text-white transition-all duration-300'>Pay online</button>}
                  {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-sm cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300'>Cancel Appointment</button> }
                  {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                  {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>} */}
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default MyStore
