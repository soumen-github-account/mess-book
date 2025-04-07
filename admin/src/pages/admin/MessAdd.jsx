import React, { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'

import axios from 'axios'
import { assets } from '../../assets/assets'
const MessAdd = () => {
    const { backendUrl } = useContext(AdminContext)
    const [messImg, setMessImg] = useState(false)
    const [messImg1, setMessImg1] = useState(false)
    const [messImg2, setMessImg2] = useState(false)
    const [messImg3, setMessImg3] = useState(false)
    const [messImg4, setMessImg4] = useState(false)
    const [beds, setBeds]=useState([])
    const [name, setName] = useState('')
    const [messName, setMessName] = useState('')
    const [messNo, setMessNo] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setpassword] = useState('')
    const [lattitude, setLattitude] = useState('')
    const [longitude, setLongitude] = useState('')
    
    const [experience, setExperience] = useState('1 year')
    const [about, setAbout] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [price1, setPrice1] = useState('')
    const [price2, setPrice2] = useState('')
    const [price3, setPrice3] = useState('')
    const [price4, setPrice4] = useState('')

    const onSubmiHandler = async(event)=>{
        event.preventDefault()
        try {
            if(!messImg){
                return toast.error("Image not selected")
            }

            const formData = new FormData()
            formData.append('image', messImg)
            formData.append('image1', messImg1)
            formData.append('image2', messImg2)
            formData.append('image3', messImg3)
            formData.append('image4', messImg4)
            formData.append('name', name)
            formData.append('messName', messName)
            formData.append('messNumber',messNo)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('about', about)
            formData.append('contact', contact)
            formData.append('beds', JSON.stringify(beds))
            formData.append('address', JSON.stringify({line1:address1, line2:address2}))
            formData.append('prices', JSON.stringify({singel: Number(price1), double: Number(price2), triple:Number(price3),quarter: Number(price4)}))
            formData.append('latitute', lattitude)
            formData.append('longitute', longitude)
            
            // consol log
            formData.forEach((value,key)=>{
                console.log(`${key}:${value}`)
            })
            const {data}= await axios.post(backendUrl + '/api/admin/add',formData)
            
            if(data.success){
                toast.success(data.message)
                setMessImg(false)
                setMessImg1(false)
                setMessImg2(false)
                setMessImg3(false)
                setMessImg4(false)
                setName('')
                setMessName('')
                setpassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setContact('')
                setAbout('')
                setPrice1('')
                setPrice2('')
                setPrice3('')
                setPrice4('')
                setLattitude('')
                setLongitude('')
                console.log(data)
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }
  return (
    <form onSubmit={onSubmiHandler} className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'>Add Mess</p>
        <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
                <label htmlFor="mess-img">
                    <img className='w-16 h-16 bg-gray-100 rounded-full cursor-pointer' src={messImg ? URL.createObjectURL(messImg) : assets.upload} alt="" />
                </label>
                <input onChange={(e)=>setMessImg(e.target.files[0])} type="file" id='mess-img' hidden />
                <p>Upload doctor <br />picture</p>
            </div>
            <div>
                <p className='pb-1'>Upload images</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-17 h-17' src={messImg1 ? URL.createObjectURL(messImg1) : assets.upload} alt="" />
                        <input onChange={(e)=>setMessImg1(e.target.files[0])} type="file" id='image1' hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-17 h-17' src={messImg2 ? URL.createObjectURL(messImg2) : assets.upload} alt="" />
                        <input onChange={(e)=>setMessImg2(e.target.files[0])} type="file" id='image2' hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-17 h-17' src={messImg3 ? URL.createObjectURL(messImg3) : assets.upload} alt="" />
                        <input onChange={(e)=>setMessImg3(e.target.files[0])} type="file" id='image3' hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-17 h-17' src={messImg4 ? URL.createObjectURL(messImg4) : assets.upload} alt="" />
                        <input onChange={(e)=>setMessImg4(e.target.files[0])} type="file" id='image4' hidden />
                    </label>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Name</p>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Enter Name' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Set Password</p>
                    <input onChange={(e)=>setpassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Mess Name</p>
                    <input onChange={(e)=>setMessName(e.target.value)} value={messName} className='border rounded px-3 py-2' type="text" placeholder='Enter Mess Name' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Mess No.</p>
                    <input onChange={(e)=>setMessNo(e.target.value)} value={messNo} className='border rounded px-3 py-2' type="number" placeholder='Enter Mess Numbers.' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Experience</p>
                    <select  onChange={(e)=>setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="">
                        <option value="1 year">1 year</option>
                        <option value="2 year">2 year</option>
                        <option value="3 year">3 year</option>
                        <option value="4 year">4 year</option>
                        <option value="5 year">5 year</option>
                        <option value="6 year">6 year</option>
                        <option value="7 year">7 year</option>
                        <option value="8 year">8 year</option>
                        <option value="9 year">9 year</option>
                        <option value="10 year">10 year</option>
                    </select>
                </div>
                </div>
            
            <div className='w-full lg:flex-1 flex flex-col gap-4'>
                <div>
                    <p className='mb-2'>Choose Bedrooms</p>
                    <div className='flex gap-3'>
                    <div onClick={()=>setBeds(prev => prev.includes("1") ? prev.filter(item => item!=="1") : [...prev,"1"])}>
                        <p className={`${beds.includes("1") ? "bg-pink-100 border border-pink-700": "bg-slate-200"} px-3 py-1 cursor-pointer`}>Single</p>
                    </div>
                    <div onClick={()=>setBeds(prev => prev.includes("2") ? prev.filter(item => item!=="2") : [...prev,"2"])}>
                        <p className={`${beds.includes("2") ? "bg-pink-100 border border-pink-700": "bg-slate-200"} px-3 py-1 cursor-pointer`}>Double</p>
                    </div>
                    <div onClick={()=>setBeds(prev => prev.includes("3") ? prev.filter(item => item!=="3") : [...prev,"3"])}>
                        <p className={`${beds.includes("3") ? "bg-pink-100 border border-pink-700": "bg-slate-200"} px-3 py-1 cursor-pointer`}>Triple</p>
                    </div>
                    <div onClick={()=>setBeds(prev => prev.includes("4") ? prev.filter(item => item!=="4") : [...prev,"4"])}>
                        <p className={`${beds.includes("4") ? "bg-pink-100 border border-pink-700": "bg-slate-200"} px-3 py-1 cursor-pointer`}>Quarter</p>
                    </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-1'>
                    {
                        beds==''?
                        <p className='text-red-500'>You did no choos Bedrooms</p>
                        : <p>Prices</p>
                    }
            
                    {
                        beds.includes("1") ? <input onChange={(e)=>setPrice1(e.target.value)} value={price1} className='border rounded px-3 py-2' type="number" placeholder='Singel bed price' required /> : <div></div>
                    }
                    {
                        beds.includes("2") ? <input onChange={(e)=>setPrice2(e.target.value)} value={price2} className='border rounded px-3 py-2' type="number" placeholder='Double bed price' required /> : <div></div> 
                    }
                    {
                       beds.includes("3") ? <input onChange={(e)=>setPrice3(e.target.value)} value={price3} className='border rounded px-3 py-2' type="number" placeholder='Triple bed price' required /> : <div></div>
                    }
                    {
                        beds.includes("4") ? <input onChange={(e)=>setPrice4(e.target.value)} value={price4} className='border rounded px-3 py-2' type="number" placeholder='Quarter bed price' required /> :<div></div>
                    }
                    
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Contact no.</p>
                    <input onChange={(e)=>setContact(e.target.value)} value={contact} className='border rounded px-3 py-2' type="number" placeholder='Conttact no.' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Address</p>
                    <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
                    <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Lattitude</p>
                    <input onChange={(e)=>setLattitude(e.target.value)} value={lattitude} className='border rounded px-3 py-2' type="text" placeholder='Enter Lattitude' required />
                </div>
                <div className='flex-1 flex flex-col gap-1'>
                    <p>Longitude</p>
                    <input onChange={(e)=>setLongitude(e.target.value)} value={longitude} className='border rounded px-3 py-2' type="text" placeholder='Enter Lattitude' required />
                </div>
            </div>
            </div>
            <div>
                <div>
                    <p className='mt-4 mb-2'>About Mess</p>
                    <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' type='text' placeholder='write about messes' rows={5} required></textarea>
                </div>
                <button className='bg-blue-500 px-10 py-3 mt-4 text-white rounded-full' type='submit'>Add Mess</button>
            </div>
        </div>
        
    </form>
  )
}

export default MessAdd
