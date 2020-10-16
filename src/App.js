import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Dipolog, ph"/>
      {/*<WeatherEngine location="Cebu, ph"/>
      <WeatherEngine location="Iligan, ph"/>*/}
    </div>
  );
}

export default App;
