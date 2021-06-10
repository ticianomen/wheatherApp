import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './SearchBar.module.css';

function Nav({onSearch}) {
  return (
        <nav className= {styles.Navi}>
          <img className= {styles.logo} src= {Logo} alt= "Logo Henry"></img>
          <p className={styles.navText} href="#">Henry - Weather App</p>
          <SearchBar onSearch={onSearch}/>
        </nav>

  );
};

export default Nav;
