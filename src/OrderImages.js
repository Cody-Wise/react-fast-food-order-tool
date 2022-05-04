import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="food">
      <span className="food-image1"> {foodId ? <img src={`food-${foodId}.jpg`} /> : ''} </span>
      <span className="food-image2"> {sideId ? <img src={`side-${sideId}.jpg`} /> : ''} </span>
      <span className="food-image3"> {drinkId ? <img src={`drink-${drinkId}.jpg`} /> : ''} </span>
    </div>
  );
}
