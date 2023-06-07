import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineList from '../AirlineList/AirlineList'

function App() {

  const reduxStore = useSelector(store => store);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <pre>{JSON.stringify(reduxStore)}</pre>
      <button onClick={() => dispatch({ type: 'ADD_AIRLINE', payload: 'airline' })}>Add Airline</button>
      <table>
        <AirlineList/>
        </table>
    </div>
  );
}

export default App;
