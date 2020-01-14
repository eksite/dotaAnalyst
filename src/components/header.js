import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './header.css';

const Head = styled.header`
  display: flex;
  background-color: black;
  color: white;
  flex-direction: row;
  justify-content: space-around;
`;
const input = styled.input`
  height: auto;
`;

const Header = () => (
  <Head>
    <Link className="link" to="/">
      Home
    </Link>
    <Link className="link" to="/fetch">
      fetchOnly
    </Link>
    <div>
      <input className="lala" type="text" id="matchID" />
      <input type="button" onClick={() => {
        const url = document.getElementById('matchID')
          < Link to = {`/matchID/${url}`
      } />
      }} />
    </div>
  </Head>
);
export default Header;
