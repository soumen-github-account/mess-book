import { createContext, useEffect, useState } from 'react'

import { sellers } from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
export const SellersContext = createContext()
const SellersContextProvider = (props) => {
  const currency = '₹'
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [cartItem, setCartItem] = useState({})
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
  const [userData, setUserData] = useState(false)
  const [messes, setMesses] = useState([])
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  

  const getMessData = async ()=>{
    try {
        const {data} = await axios.get(backendUrl + '/api/admin/list')
        if(data.success){
            setMesses(data.messes)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
  }

  const loadUserProfileData = async()=>{
    try {
        const {data} = await axios.get(backendUrl + '/api/user/get-Profile',{headers:{token}})
        if(data.success){
            setUserData(data.userData)
        } else{
            console.log("hello")
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}


  // useEffect(()=>{
  //   console.log(cartItem)

    
  // },[cartItem])

  useEffect(()=>{
    if(token){
        loadUserProfileData()
    } else{
        setUserData(false)
    }
  },[token])

  useEffect(()=>{
    getMessData()
  },[])

   const value = {
    currency,
    sellers,
    backendUrl,token,setToken,
    userData,
    setUserData,
    loadUserProfileData,
    getMessData,messes,
    search,setSearch,
    showSearch,setShowSearch
    }
  
  return (
    <SellersContext.Provider value={value}>
            {props.children}
    </SellersContext.Provider>
  )
}

export default SellersContextProvider
