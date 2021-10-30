import React from 'react'

const Tvshows = ({image,title,id,crew}) => {
    return (
        <main className="mai-the" key={id}>
            <section className='photo-continer'>
                <img src={image} alt={title} className='img-img' />
            </section> 
            <section className='data-continer data-continers'>
                <p>{title}</p>
            </section> 
        </main>
    )
}

export default Tvshows
