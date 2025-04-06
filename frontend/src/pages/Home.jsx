import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import TopMesses from '../components/TopMesses'
import RecomendedSellers from '../components/RecomendedSellers'
import CustomerTestimonials from '../components/CustomerTestimonials'
import Banner from '../components/Banner'
import LoginBanner from '../components/LoginBanner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <TopMesses/>
      <RecomendedSellers/>
      <CustomerTestimonials/>
      <LoginBanner />
      <Banner/>
    </div>
  )
}

export default Home
