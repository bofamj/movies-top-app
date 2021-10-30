import React from 'react'
import './home.css'
/*the-photo */
export default function Theaters({weekend,image,plot,genres,title,id}) {
    //console.log(plot);
    return (
        <main className="mai-the" key={id}>
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
