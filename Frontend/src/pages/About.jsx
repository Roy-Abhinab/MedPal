import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col my-10 md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome To Medpal, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently. At Medpal, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.</p>
          <p>Medpal Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Medpal Is Here To Support You Every Step Of The Way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision At Medpal Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When You Need It.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-800 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Efficiency:</b>
          <p>Medpal Streamlines The Process Of Booking Appointments And Managing Health Records, Saving You Time And Reducing Stress.</p>
        </div>

        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Convenience:</b>
          <p>With Medpal, You Can Access Your Health Information And Schedule Appointments From The Comfort Of Your Home, Anytime, Anywhere.</p>
        </div>

        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300'>
          <b>Personalization:</b>
          <p>Medpal Offers A Personalized Healthcare Experience Tailored To Your Specific Needs And Preferences.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About