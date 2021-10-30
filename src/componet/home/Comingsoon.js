import React from 'react'

const Comingsoon = ({releaseState,image,plot,genres,fullTitle,id}) => {
    return (
        <main className="mai-the">
            <section className='photo-continer' key={id}>
                <img src={image} alt={fullTitle} />
            </section> 
            <section className='data-continer data-continers'>
                <p>{fullTitle}</p>
                <p>{releaseState}</p>
            </section> 
            {/* <section className='over-view over-views'>
                <p>{plot}</p>
            </section> */}
        </main>
)
    
}

export default Comingsoon
