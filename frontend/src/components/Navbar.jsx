import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { SellersContext } from '../context/SellersContext'
import './navbar.css'
import { FiHome } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import { MdAssignmentInd } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
const Navbar = () => {
    const {token, setToken,userData,setShowSearch } = useContext(SellersContext)
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    // const [token, setToken] = useState(true)
    const [color, setColor] = useState('')
    const logout = ()=>{
      setToken(false)
      localStorage.removeItem('token')
      navigate('/')
    }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='lg:w-44 md:w-44 w-32 cursor-pointer ' src={assets.logo} alt="" />
      {/* <img onClick={()=>navigate('/')} className='w-8 cursor-pointer lg:hidden md:hidden' src={assets.logo_sm} alt="" /> */}
      <ul className='hidden md:flex items-start gap-5 font-medium z-20'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/messes'>
            <li className='py-1'>All Messes</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
        </NavLink>
      </ul>


      <div className='bg-gray-200 nav__menu' id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
            <NavLink onClick={()=>{setColor('home'); scrollTo(0,0)}} to='/' className="nav__link active-link">
                <FiHome className={color=='home' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">Home</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('doctor'); scrollTo(0,0)}} to={'/messes'} className="nav__link">
            <BiBuildingHouse className={color=='doctor' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">All Messes</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('appoint'); scrollTo(0,0)}} to='/my-store' className="nav__link">
            <IoBagAddSharp className={color=='appoint' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">My Stors</span>
            </NavLink>
        </li>

        <li className="nav__item">
            <NavLink onClick={()=>{setColor('service') ; scrollTo(0,0)}} to='/my-profile' className="nav__link">
                <MdAssignmentInd className={color=='service' ? 'text-[#007E85] nav__icon' :'nav__icon'} />
                <span className="nav__name">Profile</span>
            </NavLink>
        </li>

        
    </ul>
    </div>


      <div className='flex items-center gap-4'>
      <NavLink to='/messes'>
        <img src={assets.serach_icon} onClick={()=>setShowSearch(true)} className='w-6 mt-1 cursor-pointer' alt="" />
        </NavLink>
      <NavLink to='/my-store'><img src={assets.shopping_cart} className='w-7 mt-1 cursor-pointer' alt="" /></NavLink>
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 h-8 rounded-full' src={userData.image} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block active:block'>
                <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black curcor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-store')} className='hover:text-black curcor-pointer'>My Store</p>
                    <p onClick={logout} className='hover:text-black curcor-pointer'>Logout</p>
                </div>
            </div>
            </div>
            : <button onClick={()=>navigate('/login')} className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create Account</button> 
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
      {/* ----------mobile menu----------*/}
      <div className={`${showMenu ? 'fixed w-full h-full' : 'h-0 w-0'} md:hidden right-0 top-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt="" />
          <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
          <NavLink className='px-4 py-2 rounded inline-block' to='/' onClick={()=>setShowMenu(false)}>Home</NavLink>
          <NavLink className='px-4 py-2 rounded inline-block' to='/messes' onClick={()=>setShowMenu(false)}>All Messes</NavLink>
          <NavLink className='px-4 py-2 rounded inline-block' to='/about' onClick={()=>setShowMenu(false)}>About</NavLink>
          <NavLink className='px-4 py-2 rounded inline-block' to='/contact' onClick={()=>setShowMenu(false)}>Contact</NavLink>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
