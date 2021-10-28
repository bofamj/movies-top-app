import React from 'react'
import {useGlobalContext} from '../context'
import AllMovie from './AllMovie'
import './style.css'

const AllMovies = () => {
    const {loading,theatres}=useGlobalContext()
    if(loading){
        return <h1>loading...</h1>
    }
    return (
        <main className='m-cont all-m-c'>
            {theatres.map((movie)=>{
                return (
                    <div className='top-movie all-movis'>
                        <AllMovie key={movie.id} {...movie}/>
                    </div>
                )
            })}
        </main>
    )
}

export default AllMovies
