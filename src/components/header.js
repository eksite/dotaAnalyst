import React from 'react';
<<<<<<< HEAD
import Navigation from './Navigation';
=======
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './header.css';
>>>>>>> 62f416dfca5468616eff2e3c894105dd0bf3b8c9

// const Head = styled.header`
//   display: flex;
//   background-color: black;
//   color: white;
//   flex-direction: row;
//   justify-content: c;
// `;
const Header = ({ items }) => <Navigation items={items} />;
export default Header;
