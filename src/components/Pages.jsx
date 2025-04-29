import React from 'react'
import SectionHeader from './SectionHeader'
import { pageData } from './CardData';
import PageSec from './PageSec';

 function Pages() {
  return (
    <section id='pages'>
        <div className="container">
            
             <div className="text-top">Children Deserve Bright Future</div>
             <SectionHeader title="Navigate through our Pages" description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school "/>
            
                <div className="pages-container">
                   {pageData.map((pages) => {
                                  const {id, descreption, title} = pages;
                                  return <PageSec key={id}  title={title} descreption={descreption} />
                              })}
                </div>
        </div>

    </section>
  )
}

export default Pages
