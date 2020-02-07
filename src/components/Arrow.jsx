import React from 'react';
import { withRouter } from 'react-router-dom';
import arrow from '../arrow.png';
import './Arrow.scss';
const Arrow = props => {
  const handleClick = () => {
    switch (props.location.pathname) {
      case '/':
        props.history.push('/work');
        break;
      default:
        break;
    }
  };
  return (
    <div onClick={handleClick} className='arrow'>
      <img src={arrow} alt='Go Down' />
    </div>
  );
};

export default withRouter(Arrow);
