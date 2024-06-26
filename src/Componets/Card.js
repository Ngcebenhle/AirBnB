import React from "react";

import "./Card.css";

const Card = ({ src, tittle, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />

      <div className="card_info">
        <h2>{tittle}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
