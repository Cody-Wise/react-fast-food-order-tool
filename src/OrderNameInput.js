import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  //   function handleNameChange(e) {
  //     console.log(e.target.value);
  //     setOrderName(e.target.value);
  //   }
  return (
    <div>
      {' '}
      Please Type your name <input onChange={(e) => setOrderName(e.target.value)} />;
    </div>
  );
}
