import React,{useRef} from 'react'
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie = ({original_title,overview,poster_path,release_date,title,vote_average}) => {
   /*  const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }; */
      const colors = useRef()
      /* if(vote_average <= 5){
       colors.current.style.backgroundColor ='red'
    }else{
      colors.current.style.backgroundColor='green'
    } */
    return (
        <main className="movie-continer">
                <section className='photo-continer'>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                </section> 
                <section className='data-continer'>
                    <p>{title}</p>
                    <span  className={vote_average <= 7 ? 'vote redd':'vote greenn'}>{vote_average}</span>
                </section> 
                <section className='over-view'>
                    <p>{overview}</p>
                </section>
        </main>
    )
}

export default Movie



