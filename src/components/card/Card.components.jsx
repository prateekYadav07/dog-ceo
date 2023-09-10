import React from "react";
import './card.styles.css'

export const Card = ({item}) => {
    return (
        <>
            <div className="card-container">
                <img alt="dog" src={item.img} />
            </div>
        </>
    )
}