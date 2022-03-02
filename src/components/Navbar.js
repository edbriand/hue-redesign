import React from 'react';
import logo from './Philips_Hue_Logo_Custom_XSmall.png';

function Navbar() {
  return (
    <ul className="Navbar">
      <li>
        <img className="App-logo" stylelabs-content-type="Image" 
        alt="Logo - Philips Hue" srcset={logo}/>
      </li>
      <li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toggle
        </a>
      </li> 
    </ul>
  );
}

export default Navbar;