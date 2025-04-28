import React from 'react'
import Card from './Card'
import { cardData } from './CardData'

 function OurBenefits() {
  return (
    <section id='our-benefits'>
        <div className="container">
          
          <div className="title-description-benefits">
            <h1>Our Benefits</h1>
            <span className='line'></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero tempore vel.</p>
          </div>
            <div className='card-container'>
            {cardData.map((card) =>{
                const {id,title, bgColor, color, descreption, img} = card;
                return <Card key={id} title={title} bgColor={bgColor} color={color} descreption={descreption} img={img}/>
            })}
         </div>

        </div>
    </section>
  )
}

export default OurBenefits
