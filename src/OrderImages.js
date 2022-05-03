import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="food">
      {foodId ? <img src={`food-${foodId}.jpg`} /> : ''}
      {sideId ? <img src={`side-${sideId}.jpg`} /> : ''}
      {drinkId ? <img src={`drink-${drinkId}.jpg`} /> : ''}
    </div>
  );
}
