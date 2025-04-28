import React from 'react'
import Card from './Card'
import { cardData } from './CardData'

 function Home() {
  return (
    <section id='home'>
        <div className="container">
            <div className="home-header">
                <div className="home-imge">
                <img src="./public/img1.png" alt="" />
                </div>

                <div className="additional">

                <span className='join'>Lorem ipsum dolor sit.</span>
                <h1>Lorem ipsum dolor sit <span>Lorem ipsum dolor</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum reprehenderit optio ducimus.</p>

                <div className="content-count">
                    <span>Lorem ipsum <br /><a href="#">+400</a></span>
                    <span>Lorem ipsum <br /><a href="#">+400</a></span>
                    <span>Lorem ipsum <br /><a href="#">+400</a></span>

                </div>

                <div className="button-container">
                <button href="#" className='btn'>Get Start</button>
                <button href="#" className='btn btn-home-transparent'>Learn More</button>
                </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Home
