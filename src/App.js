import React, {useState} from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  const [query, setQuery] = useState('Sydney, au');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [country, setCountry] = useState('');

  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=`);
    const resJson = await apiRes.json();
    return resJson;
  };

  const handleSearch = e => {
    e.preventDefault();

    data(query).then(res => {
      setCity(res.name);
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
    });
  };

  return (
    <div className="App">
      <WeatherCard temp={temp} condition={condition} city={city}
                   country={country}/>
      {/*<WeatherCard temp={20} condition="Dust" city="Melbourne" country="AU"/>*/}
      {/*<WeatherCard temp={40} condition="Tornado" city="London" country="GB"/>*/}
      <form action="">
        <input type="search" value={query}
               onChange={e => setQuery(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default App;
