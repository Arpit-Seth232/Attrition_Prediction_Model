

import React from 'react'



import FooterSection from '@/components/Footer-section'
import { HeroSectionOne } from '@/components/Hero-section'
import SlidingSection from '@/components/Sliding-section'
import { AnimatedPinDemo } from '@/components/Feature-section'

function Home() {
  return (
    <div className='bg-black'>
    <HeroSectionOne/>
    <SlidingSection/>
    <AnimatedPinDemo/>
    <FooterSection/>
   
    </div>

  )
}

export default Home