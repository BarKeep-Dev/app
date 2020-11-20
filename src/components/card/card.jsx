import React from 'react';
import './card.css';
import { SmallCard, BigCard, WideCard } from '../cards/cards.js';


function Card (props) {
  
  const CardReducer = () => {
    switch (props.type) {
      case 'small':
        return <SmallCard props={props}/>;
      case 'big':
        return <BigCard props={props} />;
      case 'wide':
        return <WideCard props={props} />;
      default:
        return <SmallCard />;
    }
  }

  return <CardReducer />
}

export default Card;