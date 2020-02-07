import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
  const [ent, setEnt] = useState(false);

  const handleEnter = e => {
    setEnt(true);
  };
  const handleLeave = e => {
    setEnt(false);
  };
  return (
    <nav onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <ul className={`list ${ent ? '' : 'display'}`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className={`name ${ent ? 'display' : ''}`}>adedeji babajide</div>
    </nav>
  );
};

export default NavBar;
