import React from 'react';
import Styled from 'styled-components';

const Div = Styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1px;
`;
const Img = Styled.img`
  width:256px;
  height:144px;
`
const composeLink = longName => {
    const shortName = longName.slice(14);
    return `https://api.opendota.com/apps/dota2/images/heroes/${shortName}_full.png`;
};

const HeroImage = props => (
    <>
        <Div>
            <Img alt="props.name" src={composeLink(props.name)} />
        </Div>
    </>
);
export default HeroImage;
