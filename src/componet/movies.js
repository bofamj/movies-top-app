import React from 'react'
import {useGlobalContext} from '../context'
import Movie from './Movie'
import './style.css'

const Movies = () => {
    const {movies,loading} = useGlobalContext()
    
if(loading){
    return <h1>loading...</h1>
}
console.log(movies);
    return (
        <div className="top-movie">
            {movies.map((movie)=>{
                return <Movie key={movie.id} {...movie}/>
            })}
        </div>
    )
}

export default Movies


