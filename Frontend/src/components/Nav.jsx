import React, { use } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
   const navigate = useNavigate();

   return (
      <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b grey-400'>
         <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
         <ul className='hidden md:flex items-start gap-6 font-medium text-black-500'>
            <NavLink to={'/'}>
               <li className='py-1'>HOME</li>
               <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/doctors'}>
               <li className='py-1'>DOCTORS</li>
               <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/about'}>
               <li className='py-1'>ABOUT</li>
               <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/contact'}>
               <li className='py-1'>CONTACT</li>
               <hr className='border-none outline-none h-1 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
         </ul>
         <div className='flex items-center gap-4'>
            <button onClick={()=>navigate('/login')} className='bg-primary text-black px-7 py-3 rounded-full hidden md:block'>Create account</button>
         </div>
      </div>
  )
}

export default Nav