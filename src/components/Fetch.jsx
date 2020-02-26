import React from 'react';
import HeroImage from './HeroImage';
import useMatchData from './hooks/useMatchData';
import Styled from '../../node_modules/styled-components'
const StyledWrapper = Styled.div`
display:flex;
flex-wrap:wrap; 
justify-content:space-around;

`;
const StyledP = Styled.p`
text-align:center;
margin:1px;
word-wrap:
`;
const StyledElement = Styled.div`
width:272px;
height:206px;
`
const Fetch = () => {
    const heroNames = useMatchData('https://api.opendota.com/api/heroes', '');

    return (
        <StyledWrapper>
            {heroNames.map((element, index) => (
                <StyledElement>
                    <HeroImage key={index} name={element.name} />
                    <StyledP>{element.localized_name}</StyledP>
                    <StyledP>{element.roles}</StyledP>
                </StyledElement>
            ))
            }

        </StyledWrapper >
    );
};

export default Fetch;
