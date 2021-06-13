import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStore from '../utils/store';
import './NavBar.scss';

const x = {
  '/': 0,
  '/work': 1,
  '/skills': 2,
  '/contact': 3,
};

const isReverse = (prev, current) => {
  // console.log(prev, current);
  if (prev === undefined) return false;
  // console.log(x[current] < x[prev]);
  return x[current] < x[prev];
};

const NavBar = () => {
  const { pathname } = useLocation();
  const setIsReverse = useStore((state) => state.setIsReverse);

  return (
    <nav>
      <ul className={`list `}>
        <LinkItem
          onClick={() => setIsReverse(isReverse(pathname, '/'))}
          pathname={pathname}
          text="Home"
          to="/"
        />
        <LinkItem
          onClick={() => setIsReverse(isReverse(pathname, '/work'))}
          pathname={pathname}
          text="Work"
          to="/work"
        />
        <LinkItem
          onClick={() => setIsReverse(isReverse(pathname, '/skills'))}
          pathname={pathname}
          text="Skills"
          to="/skills"
        />
        <LinkItem
          onClick={() => setIsReverse(isReverse(pathname, '/contact'))}
          pathname={pathname}
          text="Contact"
          to="/contact"
        />
      </ul>
    </nav>
  );
};

const LinkItem = ({ text, to, pathname, onClick }) => {
  return (
    <li>
      <Link
        // to={{ pathname: to, state: { isReverse: isReverse(pathname, to) } }}
        onClick={onClick}
        to={to}
        className={`${pathname === to ? 'list__selected' : ''}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
