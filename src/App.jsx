import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Vacancy from './Pages/Vacancy'
import Contact from './Pages/Contact'
import Apply from './Pages/Apply'
import D_home from './Pages/D_home'
import Schedule from './Pages/Schedule'

const App = () => {
  return (

  
    <div>
      
     <Navbar/>
     <div className="container">
     <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/vacancy' element={<Vacancy />}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>} /> 
      <Route path='/dashboard' element={<Dashboard/>} /> 
      <Route path='/apply' element={<Apply/>} /> 


  {/* Dashboard with nested routes */}

  <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<D_home />} /> {/* /dashboard */}
            <Route path="schedule" element={<Schedule />} /> {/* /dashboard/schedule */}
          </Route>

     </Routes>

     </div>
     
      
      
      
      </div>
  )
}

export default App