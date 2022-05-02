import React , { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.png';

const Menu = () => (
<>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About US</a></p>
  <p><a href='#services'>Services</a></p>
  <p><a href='#Contact'>Contact</a></p>
</>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState()

  return (
    <div className='__navbar'>
      <div className='__navbar_links'>
        <div className='__navbar_links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='__navbar_links_container'>
          <Menu />
        </div>
      </div>
      <div className='__navbar_quote'>
        <p> GET YOU FREE QUOTE</p>
        <button type='button'>free quote</button>
      </div> 
      <div className='__navbar_menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='__navbar_menu_container scale-up-center'>
            <div className='__navbar_menu_container_links'>
              <Menu />
            </div> 
            <div className='__navbar_menu_container_links_quote'>
              <p> GET YOU FREE QUOTE</p>
              <button type='button'>free quote</button>
          </div>
        </div>
        )}
      </div>
    </div> 
    );
};

export default Navbar