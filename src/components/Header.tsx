
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import './Header.css';


const Header: React.FC = () => {
  return (
    <nav className='Nav-Bar'>
        <a href='/'>Shop</a>
        <div className='nav-menu'>
            <a href='/'><FaCartShopping /></a>
            <a href='/'><MdOutlinePersonOutline /></a>
            <a href='/'><ImExit /></a>
        </div>
    </nav>
  );
};

export default Header;
