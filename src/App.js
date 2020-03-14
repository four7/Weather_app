import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Weather App!</h1>
      </header>
      <main>
          <Forecast />
        <footer>
          Page made by Four7
        </footer>
      </main>
    </div>
  );
}

export default App;
