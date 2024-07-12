import React from 'react';
import './App.css';
import ButtonPrueba from './components/button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleCards from './components/cards/ExampleCards';


function App() {
  return (
    <div style={{ padding: '20px' }}>
        <ButtonPrueba></ButtonPrueba>
        <ExampleCards></ExampleCards>
      </div>

  );
}

export default App;
