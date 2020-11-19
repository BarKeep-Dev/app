import React from 'react';
import './card.css';
import SmallCard from '../cards/small-card/small-card';
import BigCard from '../cards/big-card/big-card';


function Card (props) {
  
  const CardReducer = () => {
    switch (props.type) {
      case 'small':
        return <SmallCard props={props}/>;
      case 'big':
        return <BigCard props={props} />;
      default:
        return <SmallCard />;
    }
  }

  return <CardReducer />
}

export default Card;