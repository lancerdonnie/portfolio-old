import React from 'react';
import './Home.scss';
import Svgs from './Svgs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Svgs />
      <div
        className="div1"
        style={{
          fontSize: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // fontFamily: 'Sigmar One',
          fontFamily: 'Orbitron',
        }}
      >
        <div>
          <div>Hi,</div>
          <div>I'm Adedeji Babajide</div>
        </div>
      </div>
      <div
        className="div2"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 25,
        }}
      >
        <div>
          <div>I'm a fullstack developer</div>
          <div>I love building stuff</div>
          <div>I love learning new things</div>
        </div>
      </div>
      <div className="div3">
        <div>
          <div>
            <span style={{ color: 'var(--alt-text)' }}>FullStack</span>{' '}
            Developer
          </div>
          <div>Infrastructure</div>
          <div>Enterprise</div>
        </div>
      </div>
      <Link className="div4" to="/work">
        <span>Work</span>
        <i className="fas fa-level-down-alt"></i>
      </Link>
    </div>
  );
};

export default Home;
