import React from 'react';

export default function FormInstruction({ handleSubmit, setformInstruction, formInstruction }) {
  return (
    <div className="form">
      Please Add Instructions For Your Order
      <form onSubmit={handleSubmit}>
        <input value={formInstruction} onChange={(e) => setformInstruction(e.target.value)} />
        <button>Add instruction</button>
      </form>
    </div>
  );
}
