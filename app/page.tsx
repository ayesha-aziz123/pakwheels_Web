import Cars from '@/components/Cars'
import FeatureCar from '@/components/FeatureCar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import App from "@/components/App"
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section1/>
      <Cars/>
      <FeatureCar/>
      <Logo/>
      <App/>
      <Footer/>
    </div>
  )
}

export default page