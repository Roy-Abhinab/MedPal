import React, { use, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()

  const [filterDoc, setFilterDoc] = React.useState([])

  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  const applyFilter = ()=> {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [speciality, doctors])

  return (
    <div>
      <p className='text-gray-600'>Find the right doctor for your needs</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>General physician</p>
          <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>Pediatricians</p>
          <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} 
          className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-green-600 rounded transition all cursor-pointer`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6'>
          {
            filterDoc.map((item,index) => (
              <div onClick={()=>navigate(`/appointments/${item._id}`)}
              className='border border-green-600 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-green-100' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-600'>
                    <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-black text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-500 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors