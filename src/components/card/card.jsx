import React from 'react';
import './card.css';

function Card(props) {
  const { id, type, removeCard } = props
  return (
    <div className="card-container">
      <button className="remove-card-button" onClick={() => removeCard(id)}>X</button>
      <h1>Card Title</h1>
      <h2>type: {type}</h2>
      <p className="card-id-display">ID: {id}</p>
    </div>
  );
}

export default Card;