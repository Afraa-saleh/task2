import React from 'react'
import { slidercard } from './CardData'
import Slider from './Slider';



 function OurTestimonials() {
  return (
    <section id='our-testimonials'>
        <div className="container">
          
          <div className="title-description-testimonials">
            <h1>Our Testimonials</h1>
            <span className='line'></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero tempore vel.</p>
          </div>
            <div className='slider-card-container'>
            <Slider/>
         </div>

        </div>
    </section>
  )
}

export default OurTestimonials
