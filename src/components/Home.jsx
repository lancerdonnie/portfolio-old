import React from 'react';
import './Home.scss';
import Arrow from './Arrow';
const Home = ({ anim }) => {
  return (
    <div className="home">
      <div className="homediv">
        <span className={anim ? 'anim' : ''}>Hi</span>
        <br />
        <span className={anim ? 'anim' : ''}>I'm </span>
        <span className={anim ? 'anim' : ''}>adedeji babajide</span>
        <br />
        <span className={anim ? 'anim' : ''}>
          a fullstack software engineer in Lagos
        </span>
        <br />
        <span className={anim ? 'anim' : ''}>
          I bring your ideas to reality
        </span>
      </div>
      <Arrow />
    </div>
  );
};

export default Home;
