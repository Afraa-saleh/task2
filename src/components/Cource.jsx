import {FaStar, FaBookOpen, FaChevronCircleRight} from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import React from 'react'

export default function Cource({id, img, title, sales, rating, price, lessons, duration, descreption, discount, department}) {
  return (
    <div className='cource'>
      <span className='sale'>Sale</span>
      <img src={img} alt={title} />
        <div className="content-cource">
            <div className="cource-field">
                <p className='department'>{department}</p>
                <p className='rating'><FaStar/>{rating}</p>
            </div>

            <h3>{title}</h3>
            <p className="descreption">{descreption}</p>
            <p className="sales">{sales} Sales</p>
            <p className="price"><del>{price}</del> <span className="discount">{discount}</span></p>

            <div className="cource-info">
                <p><IoMdAlarm/> {duration}</p>
                <p><FaBookOpen/>{lessons}</p>

            </div>
                <a href="#" className="btn btn-learn">Learn More <FaChevronCircleRight/></a>
        </div>
        
    </div>
  )
}
