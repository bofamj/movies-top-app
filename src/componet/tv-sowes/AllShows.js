import React from 'react'
import '.././style.css'
const AllShows = ({id,title,image,year,imDbRating}) => {
    return (
    <continer key={id} className='all-movie-cont movie-continer tv-contin'>
            
        <section className='all-movie-img photo-continer'>
            <img loading='lazy' src={image} alt={title} />
        </section>
        <section className='view-section data-continer' >
            <h2 className='title'>{title}</h2>
            <span className={imDbRating <= 5 ? 'vote redd':'vote greenn'}>{imDbRating}</span>
        </section>
        {/* <section className='over-view '>
                <p>{overview}</p>
        </section> */}
        
    </continer>
    )
}

export default AllShows
