import React from 'react'
import { useState } from 'react'
import { accourdionData } from './CardData'

export default function AccordionCard() {

    const [selected, setSelected] = useState(null)
    const toggle =(i)=>{

       if(selected == i){
        return setSelected(null)
       }

       setSelected(i)
    }

  return (
    <div id='accordion'>
        {accourdionData.map((item, i)=> (
            
        <div className="item">
        <div className="accordion-title" onClick={() => toggle(i)}>
            <h3>{item.title}</h3>
            <span>{selected == i ? '-' : '+'}</span>
        </div>

        <div className={selected == i ? 'accordion-show' : 'accordion-descreption'}>
             {item.descreption}
        </div>

        </div>
        ))}
    </div>
  )
}
