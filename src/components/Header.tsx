
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { ImExit } from "react-icons/im";
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {

  const navigate = useNavigate();
  return (
    <nav className='Nav-Bar'>
        <a href='/'>Shop</a>
        <div className='nav-menu'>
            <div onClick={() => navigate("/cart")}><FaCartShopping /></div>
            <div><MdOutlinePersonOutline /></div>
            <div><ImExit /></div>
        </div>
    </nav>
  );
};

export default Header;
