import React from 'react'
import Navbar from './Navbar'
import { FaChevronCircleRight} from "react-icons/fa";


function Header() {
  return (
    <>
        <div className="nav-top">
          <p>Admission is Open, Grab your seat now <FaChevronCircleRight/></p>
        </div>
     <header id='header'>
       
        <Navbar/>

        
    </header>
    </>
   
  )
}

export default Header
