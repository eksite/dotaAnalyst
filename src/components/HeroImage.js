import React from 'react';
import styled from 'styled-components';

const Div = styled.button`
  background-color: black;
  color: white;
`;

const composeLink = longName => {
  const shortName = longName.slice(14);
  return `https://api.opendota.com/apps/dota2/images/heroes/${shortName}_full.png`;
};

const HeroImage = props => (
  <>
    <Div>
      <img src={composeLink(props.name)} />
    </Div>
  </>
);
export default HeroImage;
