import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import food from '../assets/img/tfood.gif';

export default function Food(props){

  // console.log(props.foodLevel);

  return (
    <div>
      <img src={food}/>
      <button onClick={props.onFoodClick} >I am going to eat some food</button>
      <button onClick={props.onNoFoodClick} >I'd prefer to starve</button>
      <p>My food Level is ${props.foodLevel}</p>
      <Link to='/' >Go Home</Link>
    </div>
  );
}

Food.propTypes = {
  onFoodClick: PropTypes.func,
  onNoFoodClick: PropTypes.func,
  value: PropTypes.string
}
