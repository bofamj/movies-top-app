import React from 'react'
import './style.css'

const Movie = ({original_title,overview,poster_path,release_date,title,vote_average}) => {
    return (
        <main className="movie-continer">
            <section className='photo-continer'>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </section> 
            <section className='data-continer'>
                <p>{title}</p>
                 <span>{vote_average}</span>
            </section> 
        </main>
    )
}

export default Movie



