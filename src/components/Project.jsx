import React from 'react';
import './Project.scss';
import blanche from '../assets/Blanche.PNG';

const Project = props => {
  return (
    <div className={`project `}>
      <img src={blanche} alt='' />
      <div className='cover'>
        <p>{props.name}</p>
        <hr className='dash' />
        <span>{props.desc}</span>
        <div className='link'>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-external-link-alt'></i>
          </a>
          <a href={props.git} target='_blank' rel='noopener noreferrer'>
            <i className='devicon-github-plain colored'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
