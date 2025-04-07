import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'
import Map from '../components/Map'

const Messes = () => {
  const {currency, messes, search,showSearch} = useContext(SellersContext)
  // const { speciality } = useParams()
  const { speciality } = useParams()
  // const [filterDoc, setFilterDoc] = useState([0])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()
  const [searchmess, setSearchmess] = useState([0])
  // const applyFilter = () =>{
  //   if(speciality){
  //     setFilterDoc(sellers.filter(sel => sel.speciality === speciality))
  //   } else{
  //     setFilterDoc(sellers)
  //   }
  // }
  const searchFiletr =()=>{
    //let messcopy = messes.slice()

    if(showSearch && search){
      // setSearchmess(messes.filter(mess => mess.address.line1 === search))
      setSearchmess(messes.filter(item => item.address.line1.toLowerCase().includes(search.toLowerCase())))
    } else{
      setSearchmess(messes)
    }
    if(speciality){
      console.log(speciality)
      setSearchmess(messes.filter(mess => mess.beds.some(bed => parseInt(bed) === parseInt(speciality))))
      console.log(messes)
    } 
  }
  // useEffect(()=>{
  //   applyFilter()
    
  // },[sellers, speciality])

  useEffect(()=>{
    searchFiletr()
  },[messes, speciality, showSearch,search])
  return (
    <div>
      <p className='text-gray-600'>Browse through the Speciality.</p>
        <button className={`px-3 py-1 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-[#5F6FFF] text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filter</button>
        <div className={`flex gap-4 text-sm text-gray-600 overflow-scroll ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === '1' ? navigate('/messes') : navigate('/messes/1')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-sm transition-all cursor-pointer hover:bg-green-50 ${speciality === "1" ? "bg-indigo-100 text-black" : ""}`}>Single Bed-Room</p>
          <p onClick={()=> speciality === '2' ? navigate('/messes') : navigate('/messes/2')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-sm transition-all cursor-pointer hover:bg-green-50 ${speciality === "2" ? "bg-indigo-100 text-black" : ""}`}>Double Bed-Room</p>
          <p onClick={()=> speciality === '3' ? navigate('/messes') : navigate('/messes/3')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-sm transition-all cursor-pointer hover:bg-green-50 ${speciality === "3" ? "bg-indigo-100 text-black" : ""}`}>Triple Bed-Room</p>
          <p onClick={()=> speciality === '4' ? navigate('/messes') : navigate('/messes/4')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-sm transition-all cursor-pointer hover:bg-green-50 ${speciality === "4" ? "bg-indigo-100 text-black" : ""}`}>Multiple Bed-Room</p>
        </div>
      <div className='flex items-center justify-between py-[20px]'>
        <div className='grid lg:grid-cols-1 w-[700px] h-[70vh] px-[20px] items-start justify-center md:grid-cols-3 grid-cols-2 mt-2 gap-6 overflow-scroll'>
          {   
              searchmess.map((item,index)=>(
               <div key={index} onClick={()=>navigate(`/mess-book/${item._id}`)} className='flex flex-wrap border border-gray-400 hover:shadow-xl rounded-sm hover:scale-100 duration-300 cursor-pointer'>
                <img className='w-full lg:w-56' src={item.image} alt="" />
                <div className='ml-2'>
                  <p className='text-base mt-2 font-semibold'>{item.messName}</p>
                  <p className='text-gray-600 text-sm mt-2'>by {item.name}</p>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500  rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-sm inline-block overflow-clip'>{item.address?.line1}</p>
                  <p className='text-sm inline-block'>{item.address?.line2}</p>
                  <div className='flex'>
                  <p className='text-lg font-semibold text-gray-800 lg:mt-3 mt-1 mb-1'>{currency} {item.prices?.singel ?? "2450"}</p>
                  {/* <img src={assets.favorite_img} className='w-8 h-8 lg:ml-60 sm:ml-20 lg:mt-2 ml-10' alt="" /> */}
                  </div>
                </div>
                
              </div>
              
            ))
            
          }

        </div>
        <div className='h-[40vw] flex-2 lg:block hidden'>
         <Map items={searchmess}/>
        </div>
      </div>
    </div>
  )
}

export default Messes
