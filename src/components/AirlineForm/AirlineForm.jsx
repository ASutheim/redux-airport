import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AirlineForm() {
  const dispatch = useDispatch();

  const [newAirline, setNewAirline] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    dispatch({
      type: 'ADD_AIRLINE',
      payload: newAirline 
    });

    setNewAirline('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Airline name"
        onChange={event => setNewAirline(event.target.value)}
        value={newAirline}
      >
      </input>
    <button type="submit">Add!</button>
  </form>
  )
}

export default AirlineForm;