import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <ul className={`list `}>
        <LinkItem text="Home" to="/" />
        <LinkItem text="Work" to="/work" />
        <LinkItem text="Skills" to="/skills" />
        <LinkItem text="Contact" to="/contact" />
      </ul>
    </nav>
  );
};

const LinkItem = ({ text, to }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        id={text}
        to={to}
        className={`${pathname === to ? 'list__selected' : ''}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
