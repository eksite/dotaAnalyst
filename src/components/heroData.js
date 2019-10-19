import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
`;
const composeLink = longName => {
  const shortName = longName.slice(14);
  return `https://api.opendota.com/apps/dota2/images/heroes/${shortName}_full.png`;
};

const Hero = props => (
  <>
    <Div>
      <img src={composeLink(props.name)} />
    </Div>
  </>
);

export default Hero;
