import React, { useState } from 'react';
import './one-pager.css';
import Card from '../card/card';

function OnePager() {
  const [cards, setCards] = useState([])

  const addCard = (type) => {
    setCards([
      ...cards,
      {
        id: Math.random() * 100,
        type: type
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
      <button onClick={() => addCard("small")}>Add Small Card</button>
      <button onClick={() => addCard("big")}>Add Big Card</button>
      <button onClick={() => addCard("wide")}>Add Wide Card</button>
      <div className="cards-display">
        <CardsDisplay />
      </div>
    </div>
  );
}

export default OnePager;