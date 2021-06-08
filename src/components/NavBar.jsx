import React, { useContext, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LocationProvider } from '../context/LocationProvider';
import './NavBar.scss';

const isReverse = (prev, current) => {
  const x = {
    '/': 0,
    '/work': 1,
    '/skills': 2,
    '/contact': 3,
  };
  if (!prev) return false;
  return x[current] < x[prev];
};

const NavBar = () => {
  const a = useRef();
  const { pathname } = useLocation();
  const { change } = useContext(LocationProvider);

  useEffect(() => {
    change(isReverse(a.current, pathname));
    a.current = pathname;
  }, [pathname, change]);

  return (
    <nav>
      <ul className={`list `}>
        <LinkItem pathname={pathname} text="Home" to="/" />
        <LinkItem pathname={pathname} text="Work" to="/work" />
        <LinkItem pathname={pathname} text="Skills" to="/skills" />
        <LinkItem pathname={pathname} text="Contact" to="/contact" />
      </ul>
    </nav>
  );
};

const LinkItem = ({ text, to, pathname }) => {
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
