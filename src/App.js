import React from 'react';
import './App.css';
import Header from "./header/Header";

function App() {
  console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
