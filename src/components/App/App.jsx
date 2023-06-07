import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import AirlineList from "../AirlineList/AirlineList";
import AirlineForm from "../AirlineForm/AirlineForm";

function App() {
  // const reduxStore = useSelector((store) => store);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <AirlineList />
    </div>
  );
}

export default App;
