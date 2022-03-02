import React from 'react';
import logo from './Philips_Hue_Logo_Custom_XSmall.png';
import Switch from './Switch';

function Navbar() {
  return (
    <ul className="Navbar">
      <li>
        <img className="App-logo" stylelabs-content-type="Image" 
        alt="Logo - Philips Hue" srcset={logo}/>
      </li>
      <li>
        <Switch></Switch>
      </li> 
    </ul>
  );
}

export default Navbar;