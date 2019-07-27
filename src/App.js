import React from 'react'
import StatusTable from './components/status'
import Counter from './components/counter'
import Form from './components/form'

import Inventory from './data/inventory.json'

import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h2>Inventory App</h2>
      </header>

      <div className="panels">
        <div class="row">
          <div class="column">
            <section className="box tile">
              <StatusTable data={Inventory}/>
            </section>
          </div>
          <div class="column">
            <section className="box tile">
              <Counter />
            </section>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <section className="box form">
            <Form />
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;
