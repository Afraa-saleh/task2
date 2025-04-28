import React from 'react'
import { GoArrowRight } from "react-icons/go";

export default function Header() {
  return (
   <header id='header'>
        <nav className='navbar'>
            <a href="#" className='logo'>Academy</a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Academies</a></li>
                <li><a href="#">Adminshsakjf</a></li>
                <li><a href="#">Students Life</a></li>
                <li><a href="#" className='contact-select'>Contact</a></li>


            </ul>
            <div className="account">
                <a href="#" className='btn-join'>Join Us <GoArrowRight /></a>
            </div>
        </nav>
   </header>
  )
}
