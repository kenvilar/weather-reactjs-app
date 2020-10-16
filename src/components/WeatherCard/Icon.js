import React from 'react';
import styled from '@emotion/styled';

const Icon = ({condition}) => {
  const Icon = styled.img`
    width: 20%;
  `;

  let icon = '';
  switch (condition) {
    case 'Clouds':
      icon = `./img/Mostly Cloudy.png`;
      break;
    case 'Clear':
      icon = `./img/Mostly Sunny.png`;
      break;
    case 'Haze':
      icon = `./img/Haze.png`;
      break;
    case 'Hail':
      icon = `./img/Hail.png`;
      break;
    case 'Fog':
      icon = `./img/Fog.png`;
      break;
    case 'Tornado':
      icon = `./img/Tornado.png`;
      break;
    case 'Dust':
      icon = `./img/Dust.png`;
      break;
    case 'Mist':
      icon = `./img/Fog.png`;
      break;
    case 'Snow':
      icon = `./img/Snow.png`;
      break;
    case 'Rain':
      icon = `./img/Rain.png`;
      break;
    case 'Drizzle':
      icon = `./img/Drizzle.png`;
      break;
    case 'Thunderstorm':
      icon = `./img/Severe Thunderstorm.png`;
      break;
    default:
      icon = `./img/Fog.png`;
      break;
  }

  return (
    <>
      <Icon className="icon" src={icon} alt="Weather Icon"/>
    </>
  );
};

export default Icon;
