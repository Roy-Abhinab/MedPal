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
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/my-profile' element={<Profile />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
