import React, {useEffect, useState} from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({location}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async q => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        //input your api key here after appid=
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=`);
      const resJson = await apiRes.json();
      setWeather({
        temp: resJson.main.temp,
        city: resJson.name,
        condition: resJson.weather[0].main,
        country: resJson.sys.country,
      });
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{color: 'black'}}>There has been an error!<br/>
        <button
          onClick={() => setError(false)}>Reset
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        width: '200px',
        height: '240px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <PulseLoader size={15} color="purple"/>
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
