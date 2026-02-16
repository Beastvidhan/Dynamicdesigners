import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

/* ✅ ROUTER */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* ✅ TEAM PAGES */
import Preet from "./pages/Preet"
import Vidhan from "./pages/Vidhan"
import Prasoon from "./pages/Prasoon"
import Rudraksh from "./pages/Rudraksh"
import Nandini from "./pages/Nandini"
import Utkarsh from "./pages/Utkarsh"
import Vineet from "./pages/Vineet"
import Lavanya from "./pages/Lavanya"

const App = () =>  {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  return (
    <Router>

      <Routes>

        {/* 🏠 HOME PAGE */}
        <Route 
          path="/" 
          element={
            <div className='dark:bg-black relative'>
              <Toaster/>
              <Navbar theme={theme} setTheme={setTheme}/>
              <Hero/>
              <Services/>
              <OurWork/>
              <Teams/>
              <ContactUs/>
              <Footer theme={theme}/>
            </div>
          } 
        />

        {/* 👥 TEAM ROUTES */}
        <Route path="/team/preet" element={<Preet />} />
        <Route path="/team/vidhan" element={<Vidhan />} />
        <Route path="/team/prasoon" element={<Prasoon />} />
        <Route path="/team/rudraksh" element={<Rudraksh />} />
        <Route path="/team/nandini" element={<Nandini />} />
        <Route path="/team/utkarsh" element={<Utkarsh />} />
        <Route path="/team/vineet" element={<Vineet />} />
        <Route path="/team/lavanya" element={<Lavanya />} />

      </Routes>

    </Router>
  )
}

export default App
