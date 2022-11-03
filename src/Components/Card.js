import React from "react";
export default function Card(props) {
    // console.log(props)
    let badgetext
    if(props.openSpots === 0)
    badgetext="SOLD OUT"
    else if(props.location ==="Online")
    badgetext="ONLINE"
    return(
        <div className="card-view">
            {badgetext && <div className="card-badge">{badgetext}</div>}
            <img src={props.img} alt='card-img' className="card-img"/>
            <div className="card-text">
                <img src={process.env.PUBLIC_URL +"/images/star.png"} alt='star' className="card-star"/>
                <span className="pad-left">{props.rating}</span>
                <span className="gray">({props.reviewCounts})•</span>
                <span className="gray">{props.country}</span>   
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"> <span className="bold">From ${props.price} </span> / person</p>
            
        </div>
    )
}