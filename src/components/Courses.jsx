import React from 'react'
import SectionHeader from './SectionHeader'
import { courceData } from './CardData'
import Cource from './Cource';


export default function Courses() {
  return (
    <section id='cources'>
      <div className="container">
      <div className="text-top">Smile :)</div>

        <SectionHeader title="Our Cources" description="Most Important Cources We Have"/>
        
        <div className="cources-container">
            {courceData.map((cource) =>{
                const {department, discount, descreption, duration, id, img, lessons, price, rating, sales, title} =cource
                return <Cource key={id} department={department} discount={discount} descreption ={descreption} duration={duration} img={img} lessons={lessons} price ={price} rating={rating} sales={sales} title={title}/>;
            })}
        </div>
      </div>
    </section>
  )
}
