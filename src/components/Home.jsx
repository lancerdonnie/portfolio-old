import React from 'react';
import './Home.scss';
import Arrow from './Arrow';
const Home = () => {
  return (
    <div className='home'>
      <div className='homediv'>
        <span>Hi</span>
        <br />
        <span>I'm </span>
        <span>adedeji babajide</span>
        <br />
        <span>a fullstack web developer in Lagos</span>
        <br />
        <span>I bring your ideas to reality</span>
      </div>
      <Arrow />
    </div>
  );
};

export default Home;
