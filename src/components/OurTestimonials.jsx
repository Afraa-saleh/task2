import React from 'react'
import { slidercard } from './CardData'
import Slider from './Slider';
import SectionHeader from './SectionHeader';




 function OurTestimonials() {
  return (
    <section id='our-testimonials'>
        <div className="container">
          
          <div className="title-description-testimonials">
          <div className="text-top">Their Happy Words 🤗</div>
          <div className='info'>
          <SectionHeader title="Our Testimonials" description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."/>
          </div>
          </div>
            <div className='slider-card-container'>
            <Slider/>
         </div>

        </div>
    </section>
  )
}

export default OurTestimonials
