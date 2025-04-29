import React from 'react'
import Card from './Card'
import { cardData } from './CardData'
import SectionHeader from './SectionHeader';

 function OurBenefits() {
  return (
    <section id='our-benefits'>
        <div className="container">
          
          <div className="title-description-benefits">
          <div className="text-top">Children Deserve Bright Future</div>
                  <SectionHeader title="Our Benefits" description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>               </div>
          
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
