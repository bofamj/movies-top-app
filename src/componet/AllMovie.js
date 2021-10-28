import React,{useRef} from 'react'

const AllMovie = ({original_title,overview,poster_path,release_date,title,vote_average}) => {
    const colors = useRef()
      /* if(vote_average <= 5){
        colors.current.style.backgroundColor ='red'
     }else{
       colors.current.style.backgroundColor='green'
     } */
    
    return (
        <continer className='all-movie-cont movie-continer'>
            
            <section className='all-movie-img photo-continer'>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </section>
            <section className='view-section data-continer' >
                <h2 className='title'>{title}</h2>
                <span className={vote_average <= 5 ? 'vote redd':'vote greenn'}>{vote_average}</span>
            </section>
            <section className='over-view '>
                    <p>{overview}</p>
            </section>
            
        </continer>
    )
}

export default AllMovie
