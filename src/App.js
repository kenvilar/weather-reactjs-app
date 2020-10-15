import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Sydney, au"/>
      <WeatherEngine location="Melton, au"/>
      <WeatherEngine location="Manila, ph"/>
    </div>
  );
}

export default App;
