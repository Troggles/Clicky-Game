import React from "react";
import "./Card.css";

//render images with this component
const Card = ({name, image, id, shuffleScoreCard}) => (
    <div className="card -img-container hover">
        <img alt={name} src={image} id={id}
            onClick={() => shuffleScoreCard(id)} className= 'shuffleScore'/>
    </div>

);

export default Card;