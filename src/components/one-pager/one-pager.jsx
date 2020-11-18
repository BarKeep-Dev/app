import React, { useState } from 'react';
import './one-pager.css';
import Card from '../card/card';

function OnePager() {
  const [cardNumber, setCardNumber] = useState(1)
  const [cards, setCards] = useState([])

  const addCard = () => {
    let newCardNumber = cardNumber + 1
    setCards([
      ...cards,
      {
        id: newCardNumber,
        type: 'small'
      }
    ])
    setCardNumber(newCardNumber)
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