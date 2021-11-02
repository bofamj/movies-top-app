import React from 'react'
import {useGlobalContext} from '../../context'
import AllShows from './AllShows'
import './show.css'
const TvShoe = () => {
    const {topSowes}=useGlobalContext()
    //rgconsole.log(topSowes.length);
    return (
        <main className='tv-show'>
           {topSowes.map((show)=>{
               return(
                <div className='singel-com'>
                        <AllShows key={show.id} {...show}/>
                </div>
               ) 
               
           })}
        </main>
    )
}

export default TvShoe

