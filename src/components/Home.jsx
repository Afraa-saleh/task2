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

                <span className='join'>Welcome to Little Learners Academy</span>
                <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h1>
                <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

                <div className="content-count">
                    <span className='count'>+7000<br /><span>Students Passed Out</span></span>
                    <span className='count'>+37<br /><span>Awards & Recognitions</span></span>
                    <span className='count'>+15<br /><span>Experience Educators</span></span>

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
