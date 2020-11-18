import React, { useState } from 'react';
import './one-pager.css';
import Card from '../card/card';

function OnePager() {
  const [cardNumber, setCardNumber] = useState(1)
  const [cards, setCards] = useState([{id: cardNumber, type: 'blank'}])

  const addCard = (e) => {
    e.preventDefault();
    let newCardNumber = cardNumber + 1
    setCards([
      ...cards,
      {
        id: newCardNumber,
        type: 'blank'
      }
    ])
    setCardNumber(newCardNumber)
  }

  const CardsDisplay = () => {
    if (cards.length > 0) {
      return cards.map((card) => {
        return (
          <Card key={card.id} type={card.type}/>
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