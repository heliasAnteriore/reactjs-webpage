import React from 'react';
import logo from '../assets/images/logo.png';
import MenuList from '../components/MenuList';

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo-header" src={logo} alt="logo" width={180} height={180}/>
      <MenuList/>
    </div>
  )
}

export default Header;