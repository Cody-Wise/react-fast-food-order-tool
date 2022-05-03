import React from 'react';

export default function Dropdown({ setFoodId, setDrinkId, setSideId }) {
  return (
    <div>
      <div>
        Select Your Food
        <select onChange={(e) => setFoodId(e.target.value)}>
          <option value="0">Select</option>
          <option value="1">Burger</option>
          <option value="2">Chicken</option>
          <option value="3">Pizza</option>
        </select>
      </div>
      <div>
        Select Your Side
        <select onChange={(e) => setSideId(e.target.value)}>
          <option value="0">Select</option>
          <option value="1">Mozzarella Sticks</option>
          <option value="2">Onion Rings</option>
          <option value="3">Chilli Cheese Tots</option>
        </select>
      </div>
      <div>
        Select Your Drink
        <select onChange={(e) => setDrinkId(e.target.value)}>
          <option value="0">Select</option>
          <option value="1">Ice Tea</option>
          <option value="2">LemondAde</option>
          <option value="3">Pepsi</option>
        </select>
      </div>
    </div>
  );
}
