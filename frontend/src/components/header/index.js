import React from 'react';
import { BsGrid3X3GapFill, BsFillHouseDoorFill, BsFillGrid1X2Fill, BsInfoCircle } from 'react-icons/bs';
import { FaSearch, FaPlus, FaRegBell } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

import './styles.css';

function Header() {
  return(
    <div className="header">
      <div className="header-left">
        <div className="header-box">
          <BsGrid3X3GapFill
            className="header-icon"
          />
        </div>

        <div className="header-box">
          <BsFillHouseDoorFill
            className="header-icon"
          />
        </div>

        <div className="header-box">
          <BsFillGrid1X2Fill
            className="header-icon"
          />

          <span className="header-text">Quadros</span>
        </div>

        <div className="teste">
          <input
            className="teste-input"
          />
          <FaSearch
            className="teste-icon"
          />
        </div>

      </div>

      <div className="header-center">
        <img
          className="header-logo"
          alt="logo.png"
          src={logo}
        />
      </div>

      <div className="header-right">
        <div className="header-box">
          <FaPlus
            className="header-icon"
          />
        </div>

        <div className="header-box" >
          <BsInfoCircle
            className="header-icon"
          />
        </div>

        <div className="header-box">
          <FaRegBell
            className="header-icon"
          />
        </div>

        <div className="name-box">
          LS
        </div>

      </div>
    </div>
  );
}

export default Header;