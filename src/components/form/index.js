import React from 'react';
import './form.css';

export default function Form(props){
  return(
    <form className="form-wrapper">
      <div className="row">
        <div className="column field">
          <label for="ip">IP Address</label>
          <input
            type='text'
          />
        </div>
        <div className="column field">
          <label for="type">Type</label>
          <select>
              <option value="plc">PLC</option>
              <option value="host">Host</option>
              <option value="router">Router</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <button onClick={props.addEvent}>Add</button>
        </div>
      </div>
    </form>
  )
}
