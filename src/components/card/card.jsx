import React from 'react';
import './card.css';

function Card (props) {
  const { id, type, removeCard } = props

  const ProcessedCard = ({ cardType }) => {
    console.log(`type: ${cardType}`)
    switch (cardType) {
      case 'small':
        return (
          <SmallCard />
        )
      case 'big':
        return (
          <BigCard />
        )
      default:
        return <SmallCard />;
    }
  }

  const SmallCard = () => {
    return (
      <div className="small-card-container">
        <button className="remove-card-button" onClick={() => removeCard(id)}>X</button>
        <h1>Card Title</h1>
        <h2>type: {type}</h2>
        <p className="card-id-display">ID: {id}</p>
      </div>
    )
  }

  const BigCard = () => {
    return (
      <div className="large-card-container">
        <button className="remove-card-button" onClick={() => removeCard(id)}>X</button>
        <h1>Card Title</h1>
        <h2>type: {type}</h2>
        <p className="card-id-display">ID: {id}</p>
      </div>
    )
  }

  return (
      <ProcessedCard cardType={type}/>
  );
}

export default Card;