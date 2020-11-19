import React, { useState } from 'react';
import './one-pager.css';
import Card from '../card/card';

function OnePager() {
  const [cards, setCards] = useState([])

  const addCard = () => {
    setCards([
      ...cards,
      {
        id: Math.random() * 100,
        type: 'small'
      }
    ])
  }

  const removeCard = (card_id) => {
    setCards(cards.filter(card => card.id !== card_id))
  } 

  const CardsDisplay = () => {
    if (cards.length > 0) {
      return cards.map((card) => {
        return (
          <Card key={card.id} id={card.id} type={card.type} removeCard={removeCard}/>
        );
      });
    } else {
      return <h1>Your one pager is currently empty</h1>
    }
  }
  return (
    <div>
      <button onClick={(e) => addCard(e)}>Add Card</button>
      <div className="cards-display">
        <CardsDisplay />
      </div>
    </div>
  );
}

export default OnePager;