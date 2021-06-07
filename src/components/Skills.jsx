import React, { useEffect, useState } from 'react';
import './Skills.scss';
import withDimensions from '../wrapper/withDimensions';
import Icon from './Icon';
import { CSSTransition } from 'react-transition-group';

const Skills = ({ windowWidth, windowHeight, isMobileSized }) => {
  const [app, setApp] = useState(false);
  useEffect(() => {
    setApp(true);
  }, []);
  const icons = [
    'devicon-visualstudio-plain colored',
    'devicon-bootstrap-plain colored',
    'devicon-git-plain colored',
    'devicon-github-plain colored',
    'devicon-heroku-plain colored',
    'devicon-html5-plain colored',
    'devicon-javascript-plain colored',
    'devicon-jquery-plain colored',
    'devicon-mongodb-plain colored',
    'devicon-nodejs-plain colored',
    'devicon-react-original colored',
    'devicon-sass-original colored',
    'devicon-slack-plain ',
    'devicon-express-original colored',
    'devicon-css3-plain-wordmark colored',
    'devicon-chrome-plain colored',
    'devicon-firefox-plain colored',
    'devicon-google-plain colored',
  ];
  const skilllist = [
    'Creating websites using standard HTML/CSS/JS practices',
    'Designing and developing APIs',
    'Design and deployment of databases (postgres, Mssql, mongodb)',
    'Pixel-perfect implementation of UI',
    'Design and implementation of continuous integration and deployment',
    'Implementing testing platforms and unit tests',
    'Learn and Test new technologies, frameworks and languages',
    'Server setup and management',
  ];
  return (
    <div className="skills">
      <div className="icons">
        {icons.map((el, i) => {
          return (
            <Icon
              key={i}
              className={el}
              height={windowHeight}
              width={windowWidth}
            />
          );
        })}
      </div>
      <CSSTransition
        in={app}
        timeout={5000}
        classNames="message"
        // unmountOnExit
        // appear
        // onEntered={this.listSwitch}
        // onExit={this.listSwitch}
      >
        <div className="skilllist">
          <div>What I can do for you</div>
          <div className="skilllistbody">
            <div>
              {skilllist.map((el, i) => {
                return (
                  <p className="skillitem" key={i}>
                    {el}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default withDimensions(Skills);
