import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [table, setTable] = useState('');

  const reserveTable = () => {
    alert(`Table reserved for ${name} on ${date} at ${time} no of tables reserved is ${table}.`);
  };

  return (
    <div className="App">
      <h1 align="center">Restaurant Reservation System</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <br />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <label htmlFor="table">No of Tables:</label>
      <input
        type="table"
        id="table"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
      <br />
      <button onClick={reserveTable}>Reserve Table</button>
    </div>
  );
};

export default App;
