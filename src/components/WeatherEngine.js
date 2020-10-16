import React, {useEffect, useState} from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({location}) => {
  const [query, setQuery] = useState('Sydney, au');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async q => {
    setQuery('');
    setLoading(true);
    try {
      const apiRes = await fetch(
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

  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ?
        (<div>
          <WeatherCard temp={weather.temp} condition={weather.condition}
                       city={weather.city} country={weather.country}
                       getWeather={getWeather}/>
        </div>) :
        loading ?
          (<div style={{
            display: 'flex',
            width: '200px',
            height: '240px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <PulseLoader size={15} color="purple"/>
          </div>) :
          !loading && error ?
            (<div style={{color: 'black'}}>There has been an error!<br/>
              <button
                onClick={() => setError(false)}>Reset
              </button>
            </div>) :
            null}
    </div>
  );
};

export default WeatherEngine;
