import React from "react";
import './card.styles.css'

export const Card = ({ item }) => {
    const { breed, img } = item
    return (
        <>
            <div className="card-container">
                <img alt="dog" src={img} />
                <h3>{breed}</h3>
            </div>
        </>
    )
}