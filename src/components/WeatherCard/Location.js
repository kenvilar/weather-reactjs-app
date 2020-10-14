import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.6rem;
    line-height: 1;
  `;
  const Country = styled.h3`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1rem;
    line-height: 0;
  `;

  return (
    <Container>
      <City>Sydney</City>
      <Country>AU</Country>
    </Container>
  );
};

export default Location;
