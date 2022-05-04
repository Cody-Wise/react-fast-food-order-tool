import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import Dropdown from './Dropdown';
import FormInstruction from './FormInstruction';
import InstructionsList from './InstructionsList';

function App() {
  const [foodId, setFoodId] = useState('');
  const [sideId, setSideId] = useState('');
  const [drinkId, setDrinkId] = useState('');
  const [instructions, setInstructions] = useState(['plain', 'large size']);
  const [formInstruction, setformInstruction] = useState('');
  const [ordername, setOrderName] = useState('___');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, formInstruction]);
    setformInstruction('');
  }
  return (
    <div className="App">
      <div className="order">
        <h1>Welcome to Roadkill Cafe</h1>
        <OrderNameInput setOrderName={setOrderName} />
        <Dropdown setFoodId={setFoodId} setDrinkId={setDrinkId} setSideId={setSideId} />
        <FormInstruction
          formInstruction={formInstruction}
          handleSubmit={handleSubmit}
          setformInstruction={setformInstruction}
        />
      </div>
      <header className="App-header">
        Welcome {ordername} your order is:
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
        <InstructionsList instructions={instructions} />
      </header>
    </div>
  );
}

export default App;
