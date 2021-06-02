import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import withDimensions from '../wrapper/withDimensions';

const NavBar = () => {
  return (
    <nav>
      <ul className={`list `}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default withDimensions(NavBar);
