import React, {useEffect, useState} from 'react';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = () => {
  const location = 'Sydney, au';
  const [query, setQuery] = useState('Sydney, au');
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=`);
    const resJson = await apiRes.json();
    setWeather({
      temp: resJson.main.temp,
      city: resJson.name,
      condition: resJson.weather[0].main,
      country: resJson.sys.country,
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      <WeatherCard temp={weather.temp} condition={weather.condition}
                   city={weather.city} country={weather.country}/>
      {/*<WeatherCard temp={20} condition="Dust" city="Melbourne" country="AU"/>*/}
      {/*<WeatherCard temp={40} condition="Tornado" city="London" country="GB"/>*/}
      <form action="">
        <input type="search" value={query}
               onChange={e => setQuery(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
