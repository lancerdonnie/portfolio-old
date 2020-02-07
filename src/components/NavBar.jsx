import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import withDimensions from '../wrapper/withDimensions';
const NavBar = ({ isMobileSized }) => {
  const [ent, setEnt] = useState(false);

  const handleEnter = e => {
    setEnt(!ent);
  };
  return (
    <nav
      onTouchStart={isMobileSized && handleEnter}
      onMouseEnter={!isMobileSized && handleEnter}
      onMouseLeave={!isMobileSized && handleEnter}
    >
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
      <div className={`name ${ent ? 'display' : ''}`}>
        adedeji <div className='ball'></div> babajide
      </div>
    </nav>
  );
};

export default withDimensions(NavBar);
