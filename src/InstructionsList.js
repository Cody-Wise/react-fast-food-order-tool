import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div className="instructions">
      Instruction List
      {instructions.map((instruction, i) => (
        <Instruction key={instruction + i} instruction={instruction} />
      ))}
    </div>
  );
}
