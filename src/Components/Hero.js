import React from 'react'


export default function Hero() {
    return(
        <div>
            <section className='hero'>
                 <img src={process.env.PUBLIC_URL +"/images/photo-grid.png"} alt="hero-img"  className='hero-img' />
                 <h1 className='hero-header'>Online Experiences</h1>
                 <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    )
}