import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.header`
  display: flex;
  background-color: black;
  color: white;
  flex-direction: row;
  justify-content: c;
`;
const Header = props => {
  const { items } = props;
  const res = Object.entries(items).map(arr => (
    <Link key={arr[1]} to={arr[1]}>
      {arr[0]}
    </Link>
  ));
  return res;
};
export default Header;
