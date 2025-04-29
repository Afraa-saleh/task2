import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const togglMenu = ()=>{
        setIsOpen(!isOpen)
    };

  return (
    <>

    
    <div className='container'>
        <nav className='navbar'>
            <div className="logo">
                <img src="./public/Logo.png" alt="" />
            </div>

            <div className="nav-btn-content">

                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li><button className='nav-btn active'>Home</button></li>
                    <li><button className='nav-btn'>About Us</button></li>
                    <li><button className='nav-btn'>Academics</button></li>
                    <li><button className='nav-btn'>Admissions</button></li>
                    <li><button className='nav-btn'>Students Life</button></li>
                    <li><button className='nav-btn'>Contact</button></li>
                </ul>
            </div>

            <div className="icon-menu" onClick={togglMenu}>
                <FaBars/>
            </div>
        </nav>
    </div>

  
    </>
  )
}

export default Navbar
