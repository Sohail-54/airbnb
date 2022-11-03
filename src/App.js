import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data'
// console.log(data)
const cards = data.map((item) => {
    return(
        <Card
            img={item.coverImg} 
            rating={item.stats.rating}
            reviewCounts={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
})
export default function App() {

    return(
        <div>
            <Navbar />
            <Hero />
            <section className='card-list'>
                {cards}
            </section>
            
        </div>
    )
}
