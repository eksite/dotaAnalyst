import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledDiv = Styled.div`
    display:flex;
`;
const StyledLink = Styled(Link)`
    // 
`;
const Navigation = ({ items }) => (
    <StyledDiv>
        {Object.entries(items).map(arr => (
            <StyledLink key={arr[1]} to={arr[1]}>
                {arr[0]}
            </StyledLink>
        ))}
    </StyledDiv>
);
export default Navigation;
