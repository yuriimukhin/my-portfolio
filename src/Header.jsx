import React, { useState } from 'react';
import './Header.less';
import logo from './assets/logo.svg';

function Header() {
  const container = document.getElementById('root');
  container.classList.toggle('lock');

  const [open, setOpen] = useState(false);

  return (
    <header className="layout">
      <div className="logo">
        <img alt="logo" width={50} height={50} src={logo} />
      </div>

      <div className={`menu ${open ? 'open' : 'closed'}`}>
        <div className="menu-wrapper">
          <ul>
            <li>Home</li>
            <li>
              About Us
              <span className="menu-arrow" />
              <ul className="sub-menu">
                <li>Sub 1</li>
                <li>And some sub 2</li>
              </ul>
            </li>
            <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>

      <div role="button" aria-hidden className={`burger ${open ? 'open' : 'closed'}`} onClick={() => setOpen(!open)}>
        <span />
      </div>
    </header>
  );
}

export default Header;
