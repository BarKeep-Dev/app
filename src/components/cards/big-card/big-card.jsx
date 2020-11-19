import React from 'react';
import './big-card.css';

  const BigCard = ({ props }) => {
    const { id, removeCard, type } = props

    return (
      <div className="big-card-container">
        <button className="remove-card-button" onClick={() => removeCard(id)}>
          X
        </button>
        <h1>Card Title</h1>
        <h2>type: {type}</h2>
        <p className="card-id-display">ID: {id}</p>
      </div>
    );
  };

  export default BigCard;