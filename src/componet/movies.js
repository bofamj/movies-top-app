import React from 'react'
import {useGlobalContext} from '../context'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from './Movie'
import './style.css'
import Loading from './Loading'

const Movies = () => {
    const {movies,loading} = useGlobalContext()

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", right:"25px"  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", left:"0" }}
            onClick={onClick}
          />
        );
      }
      

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
      }; 
    
if(loading){
    return <Loading/>
}
//console.log(movies);
    return (
        <div className='m-cont'>
            <Slider {...settings}>
                {movies.map((movie)=>{
                    return(
                            <div className="top-movie movies-midya">
                                <Movie key={movie.id} {...movie}/>
                            </div>
                ) 
                })}
            </Slider>
        </div>
    )
}

export default Movies


