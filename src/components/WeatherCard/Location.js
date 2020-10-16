import React, {useState} from 'react';
import styled from '@emotion/styled';

const Location = ({city, country, getWeather}) => {
  const [query, setQuery] = useState('');
  const [inputMode, setInputMode] = useState(false);

  if (inputMode) {
    return (
      <Container>
        <form onSubmit={e => {
          e.preventDefault();
          getWeather(query);
        }}>
          <input type="search" required value={query}
                 onChange={e => setQuery(e.target.value)}/>
          <button type='submit'>Search</button>
          <button onClick={() => setInputMode(false)}>Cancel</button>
        </form>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
    text-align: center;
  `;
const City = styled.h1`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.6rem;
    line-height: 1;
    position: relative;
    cursor: pointer;
    &:hover {
      top: -5px;
    }
  `;
const Country = styled.h3`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1rem;
    line-height: 0;
  `;
