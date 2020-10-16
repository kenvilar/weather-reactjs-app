import React from 'react';
import styled from '@emotion/styled';
import {motion} from 'framer-motion';

import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = ({temp, condition, city, country, getWeather}) => {
  let highColor = 0;
  let lowColor = 0;
  let color = null;

  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    color = `linear-gradient(
      to top, 
      rgba(255, ${highColor}, 0), 
      rgba(255, ${Math.abs(lowColor)}, 0)
      )`;
  } else if (temp < 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    color = `linear-gradient(
      to top, 
      rgba(0, ${highColor}, 255), 
      rgba(0, ${Math.abs(lowColor)}, 255)
      )`;
  }

  const Card = styled.div`
    margin: 0 10px;
    background: ${color};
    width: 200px; 
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}}>
      <Card>
        <Location city={city} country={country} getWeather={getWeather}/>
        <Icon condition={condition}/>
        <Condition temp={temp} condition={condition}/>
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
