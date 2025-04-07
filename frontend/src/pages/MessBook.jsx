import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'
import Map from '../components/Map'
import { GiBed } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'
import axios from 'axios'
import ReletedMesses from '../components/ReletedMesses'
import { toast } from 'react-toastify'
const MessBook = () => {
  const {messId} = useParams()
  const [messInfo, setMessInfo] = useState(null)
  const {messes, backendUrl, getMessData ,currency, token} = useContext(SellersContext)
  const [image, setImage] = useState()
  const [beds, setBeds] = useState('1')
  const [price, setPrice] = useState('0')
  const navigate = useNavigate()
  const fetchMessInfo = async()=>{
    const messInfo = messes.find(mess => mess._id === messId)
    console.log(messInfo)
    setImage(messInfo.images[0])
    setMessInfo(messInfo)
    setPrice(messInfo.prices.singel)
  }

  const applyfilter = async(bed)=>{
    const mdata = messes.find(mess => mess._id === messId)
    setBeds(bed)
    if(bed == 1){
      setPrice(mdata.prices.singel)
    } else if(bed == 2){
      setPrice(mdata.prices.double)
    } else if(bed == 3){
      setPrice(mdata.prices.triple)
    } else if(bed == 4){
      setPrice(mdata.prices.quarter)
    }
  }
  const bookAppointment = async()=>{
    if(!token){
      toast.warn("Login to book appointment")
      return navigate('/login')
    }

    try {

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {messId, price }, {headers:{token}})
      if(data.success){
        toast.success(data.message)
        getMessData()
        navigate('/my-store')

      } else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }
  useEffect(()=>{
    fetchMessInfo()
  },[messes, messId])


  return messInfo && (
    <div>
    <div className='flex mt-4 flex-wrap'>
      <div className='flex flex-wrap'>
        <div className='lg:w-[50vh] w-full'>
            <img src={image} className='w-full' alt="" />
            <div className='flex gap-4 mt-2 overflow-scroll'>
              {
                messInfo.images.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[200px] h-[100px] rounded' ></img>
                ))
              }
              {/* <img src={messInfo.image} className='w-[200px] h-[100px] rounded' alt="" />
              <img src={messInfo.image} className='w-[200px] h-[100px] rounded' alt="" />
              <img src={messInfo.image} className='w-[200px] h-[100px] rounded' alt="" />
              <img src={messInfo.image} className='w-[200px] h-[100px] rounded' alt="" /> */}
            </div>
        </div>
        <div className='lg:max-w-96 w-full bg-[#DDC7BB] rounded-sm mt-4 lg:mt-0 lg:mt-0 lg:mx-5 p-4'>
        <h2 className='font-medium items-center'>{messInfo.messName}</h2>

          <div className='mt-2 justify-between'>
            <div className='flex'><GiBed className='w-6' />
              <div className='flex items-start justify-center gap-2'>
                {
                  messInfo.beds.map((item,index)=>(
                    <button onClick={()=>applyfilter(item)}  key={index} className={`p-1 rounded bg-gray-100 cursor-pointer p-0.5 ${item === beds ? 'border' :''}`}>{item} beds</button>
                  ))
                }
              </div>
              
            </div>
            <div><FaBath /><p>1 bathroom</p></div>
            </div>
            <div className='flex items-center gap-2 text-sm text-center text-green-800'>
              <p className='w-2 h-2 bg-green-800  rounded-full'></p><p>Available</p>
            </div>
          <div>
            <p className='font-medium'>More Details</p>
            <p>{messInfo.about}</p>
            <p><span className='font-medium'>Address :</span> {messInfo.address.line1} {messInfo.address.line2}</p>
            
            
            <p className='text-md font-medium'>contact no.- 12345667 </p>
          </div>
          <h2 className='flex font-bold'><span className='text-lg'>{currency} {price}</span>/- per month <div className='flex gap-2 pl-7 pt-1'><img src={assets.star_icon} alt="" /><h3>4.3</h3></div></h2>
          <div className='w-full my-3 flex justify-center'><button onClick={bookAppointment} className='bg-[#2B1B12] text-white rounded-full px-3 py-2 font-medium'>Add to wishlist</button></div>
        </div>
      </div>
      <div className='flex-2 lg:block max-h-[450px] lg:max-w-96 w-full overflow-scroll mt-2'>
        <Map items={messInfo}/>
      </div>

      
    </div>
    {/* <ReletedMesses/> */}
    </div>
  )
}

export default MessBook
