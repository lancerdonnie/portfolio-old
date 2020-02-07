import React, { useState } from 'react';
import blanche from '../assets/Blanche.PNG';
import './Project.scss';

const Project = () => {
  const [hover, setHover] = useState(false);
  const handleHover = e => {
    setHover(!hover);
  };
  return (
    <div
      onMouseLeave={handleHover}
      onMouseEnter={handleHover}
      className={`project `}
    >
      <img src={blanche} alt='' />
      {hover && (
        <div className='cover'>
          <p>Blanche Neige</p>
        </div>
      )}
    </div>
  );
};

export default Project;
