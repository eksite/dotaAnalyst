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

const Header = () => (
  <Head>
    <Link to="/">Home</Link>
    <Link to="/fetch">fetchOnly</Link>
  </Head>
);
export default Header;
