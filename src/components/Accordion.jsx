import React from 'react'
import SectionHeader from './SectionHeader'
import { accourdionData } from './CardData'
import AccordionCard from './AccordionCard'


export default function Accordion() {
   
  return (
    <section id='accordion'>
      <div className="container">
        <SectionHeader title="Accordion" description=" "/>
        <div className="accordion-container">
          
         <AccordionCard/>
            
        </div>
      </div>
    </section>
  )
}
