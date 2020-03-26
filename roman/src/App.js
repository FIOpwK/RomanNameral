import React from 'react';
import { Button } from 'semantic-ui-react';

import './App.css';

const App = () => {

  const obj = {
    X: 10,
    M: 1000,
    L: 50,
    V: 5,
    I: 1,
    D: 500,
    C: 100,
    Q: 5,
    S: 10,
    Y: 5000
  };
  
  const keys = Object.keys(obj);
  const vals = Object.values(obj);

  const subScore = (e) => {
    let name = window.prompt('Enter a name to see its weight: ');
    let total = 0;
    let score = 0;

    keys.map((k, v) => {
      if (name.toUpperCase().includes(k)) {
        total = score += (name.toUpperCase().split(k).length - 1) * vals[v];
      } else {if (!name.toUpperCase) {
        total = 0;
      }}
      return total;

    });

    const weight = document.querySelector('.weight');
    weight.classList.add('weight');
    weight.textContent = total;

  }

  return (
    <div className="App">
      <Button color="green" onClick={subScore}>Click to Play</Button>

      <h1>Roman Nameral II</h1>
      <p>How much does a Name weigh?</p>
      <p2>Play to see</p2>
      <span className="weight"></span>

    </div>
  );
}

export default App;
