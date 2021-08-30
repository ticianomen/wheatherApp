import React from 'react';
<<<<<<< HEAD
import Logo from '../img/logoHenry.png'
=======
import Logo from '../img/logo.png'
>>>>>>> 6980c24f47654d1269efac1258822a82bfb829d3
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
<<<<<<< HEAD
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
=======
          <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About Me</span>
>>>>>>> 6980c24f47654d1269efac1258822a82bfb829d3
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};
export default Nav;
