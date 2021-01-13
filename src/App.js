import './App.css';
import React, { useState } from 'react';



const App = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(UpdateTime,1000)


  return (
    <div className="why">
    <h1 className="head">Time</h1>
    <h2 className="time"> {ctime} </h2>
    </div>
  );
}

export default App;
