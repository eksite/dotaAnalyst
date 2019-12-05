import React from 'react';
import styled from 'styled-components';
import { Link } from 

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
  </Head>
);
export default Header;
