import React from 'react';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <h1>Sweet Pumpkins</h1>
    </div>
  );
}

export default App;
