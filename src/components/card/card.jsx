import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card-container">
      <h1>Card Title</h1>
      <h2>type: {props.type}</h2>
    </div>
  );
}

export default Card;