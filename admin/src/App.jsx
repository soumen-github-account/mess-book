import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MessAdd from './pages/admin/messAdd'

const App = () => {
  return (
    <div className='bg-white'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<MessAdd />} />

      </Routes>
    </div>
  )
}

export default App
