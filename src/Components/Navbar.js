import React from 'react'


export default function Navbar() {
    return(
        <div>
            <nav>
                <img src={process.env.PUBLIC_URL +"/images/airbnb-logo.png"} alt="logo" />
            </nav>
        </div>
    )
}