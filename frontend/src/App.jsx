import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Messes from './pages/Messes'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyStore from './pages/MyStore'
import MessBook from './pages/MessBook'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/messes' element={<Messes/>} />
        <Route path='/messes/:speciality' element={<Messes/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-store' element={<MyStore/>} />
        <Route path='/mess-book/:messId' element={<MessBook/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

