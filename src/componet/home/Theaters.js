import React from 'react'
import './home.css'
/*the-photo */
export default function Theaters({weekend,image,plot,genres,title}) {
    //console.log(plot);
    return (
        <main className="mai-the">
            <section className='photo-continer'>
                <img src={image} alt={title} className='img-img' />
            </section> 
            <section className='data-continer data-continers'>
                <p>{title}</p>
                <p>{weekend}</p>
            </section> 
            {/* <section className='over-view over-views'>
                <p>{plot}</p>
            </section> */}
        </main>
    )
}
