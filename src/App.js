import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
