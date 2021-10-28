import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';
import {useGlobalContext} from '../../context';
import Theaters from './Theaters';
import Loading from '../Loading'
import ComingSoon from './Comingsoon'

const Home = () => {
    const {inTheaters,loading,comingSoon}= useGlobalContext();
    //console.log(inTheaters);
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    return <Loading />;
}
    return (
        <main className='main'  >
            <section className='hero'>
                <div className='imeg'>
                    <img src="https://4kwallpapers.com/images/walls/thumbs_3t/6495.jpg" alt="venom" style={{'width': '100%', 'height': '610px'}}/>
                </div>
                <div className='text'>
                  <h1>Unlimited movies, TV shows, and more.</h1>
                  <p>Watch anywhere. Cancel anytime</p>
                </div>
                
            </section>
            <section className='mainn-cont'>
              <div className='test'>
                <div className='text-div'>
                  <h1>Enjoy on your TV.</h1>
                  <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                
              </div>
              <section className='hom-top top-test'>
                <Slider {...settings}>
                    {inTheaters.map((movie)=>{
                                //console.log(movie);
                      return(
                        <div className="hom-theeater">
                          <Theaters key={movie.id} {...movie}/>
                        </div>
                            ) 
                    })}
                </Slider>
              </section>
            </section>
            <section className='mainn-cont'>
              <section className='hom-top coming-test'>
                  
                      <Slider {...settings}>
                          {comingSoon.map((soon)=>{
                              console.log(soon);
                              return(
                                  <div className="hom-theeater">
                                      <ComingSoon key={soon.id} {...soon}/>
                                  </div>
                              ) 
                          })}
                      </Slider>
                  
              </section>
                <div className='test '>
                  <div className='text-div'>
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                  </div>
                
                </div>
            </section>
        </main>
    )
}

export default Home
//venom imges
//https://4kwallpapers.com/images/walls/thumbs_3t/6348.jpg
//https://4kwallpapers.com/images/walls/thumbs_3t/6495.jpg

// movies in Theaters // IMDP API
//API_KEY='k_6di256ry'
//API_URL=`https://imdb-api.com/en/API/BoxOffice/${API_KEY}`
//CONMING SOON API
//API_SOON =`https://imdb-api.com/en/API/ComingSoon/${API_KEY}`