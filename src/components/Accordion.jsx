import React from 'react'
import SectionHeader from './SectionHeader'
import { accourdionData } from './CardData'
import AccordionCard from './AccordionCard'


export default function Accordion() {
   
  return (
    <section id='accordion'>
      <div className="container">
      <div className="text-top">Solutions For The Doubts</div>
        <SectionHeader title="Frequently Asked Questions" description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."/>
        <div className="accordion-container">
          
         <AccordionCard/>
          
        </div>
      </div>
    </section>
  )
}
