import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'
import MyAppointment from './pages/MyAppointment'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/dortors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/my-profile' element={<Profile />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
      </Routes>
    </div>
  )
}

export default App
