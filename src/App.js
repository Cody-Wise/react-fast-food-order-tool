import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import Dropdown from './Dropdown';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';

function App() {
  const [foodId, setFoodId] = useState('');
  const [sideId, setSideId] = useState('');
  const [drinkId, setDrinkId] = useState('');
  const [instructions, setInstructions] = useState(['plain', 'large size']);
  const [formInstruction, setformInstruction] = useState('');
  const [ordername, setOrderName] = useState('___');
  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />
      <Dropdown setFoodId={setFoodId} setDrinkId={setDrinkId} setSideId={setSideId} />
      <header className="App-header">
        Welcome {ordername} your order is:
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
        <InstructionsForm setInstructions={setInstructions} instructions={instructions} />
      </header>
    </div>
  );
}

export default App;
