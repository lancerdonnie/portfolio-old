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
    'devicon-google-plain colored'
  ];
  const skilllist = [
    'Fundamentals- JQuery, CSS3 including Grid',
    'Flexbox & SCSS, HTML5, Javascript',
    'React, hooks and Routing, Context Api and Redux',
    'Proficient with Frontend Frameworks including Material UI, Bootstrap4',
    'Proficient with Server-side Frameworks like NodeJS, Express and Puppeteer',
    'Implementation of CRUD operations',
    'NoSQL Database management with mongoose, MongoDB, Cloud Firestore',
    'Authentication and Authorization with JWT',
    'OAuth & Firebase',
    'Deployment with Netlify and Heroku',
    'Good understanding of Git workflow',
    'Proficient API design and development',
    'Creation of Google Cloud Functions',
    'Design using Figma and illustrator',
    'Single Page Applications and AJAX',
    'Basic Experience in Flutter',
    'Unit testing with Jest'
  ];
  return (
    <div className='skills'>
      <div className='icons'>
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
        classNames='message'
        // unmountOnExit
        // appear
        // onEntered={this.listSwitch}
        // onExit={this.listSwitch}
      >
        <div className='skilllist'>
          {skilllist.map((el, i) => {
            return (
              <p className='skillitem' key={i}>
                {el}
              </p>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
};

export default withDimensions(Skills);
