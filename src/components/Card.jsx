import React from 'react'

export default function Card({ id,img, title, color, bgColor, descreption}) {
  return (
    <div className='card'>
      <span className='icon' style={{color:color, background:bgColor}}>{img}</span>
        <h2>{title}</h2>
        <p>{descreption}</p>
    </div>
  )
}
