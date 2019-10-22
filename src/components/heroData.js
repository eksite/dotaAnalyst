import React from 'react';
import styled from 'styled-components';

const InlineHeroes = styled.div`
  display: inline-block;
`;
const composeLink = longName => {
  const shortName = longName.slice(14);
  return `https://api.opendota.com/apps/dota2/images/heroes/${shortName}_full.png`;
};

const Hero = props => (
  <InlineHeroes>
    <img src={composeLink(props.name)} />
  </InlineHeroes>
);

export default Hero;
