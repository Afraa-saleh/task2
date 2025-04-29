import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function PageSec({id, title, descreption}) {
  return (
    <div id='page'>
                    

                  <h1>{title}</h1>
               <div className="Line-container">
                <div className="line"></div>
               </div>
               <p className="descreption">{descreption}</p>
               <div className='hi'>
                <button className='btn'>Learn More <FaArrowRight/></button>

               </div>
                    
    </div>
  )
}
