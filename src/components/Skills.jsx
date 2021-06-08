import React from 'react';
import './Skills.scss';
import withDimensions from '../wrapper/withDimensions';
import Icon from './Icon';

const icons = [
  'devicon-nodejs-plain colored',
  'devicon-react-original colored',
  'devicon-sass-original colored',
  'devicon-vuejs-plain colored',
  'devicon-bash-plain colored',
  'devicon-csharp-plain colored',
  'devicon-dotnetcore-plain colored',
  'devicon-docker-plain colored',
  'devicon-nginx-plain colored',
  'devicon-typescript-plain colored',
];
const skilllist = [
  'Create websites using standard HTML/CSS/JS practices',
  'Design and develop APIs',
  'Design and deploy databases (postgres, Mssql, mongodb)',
  'Pixel-perfect implementation of UI',
  'Design and implement continuous integration and deployment',
  'Implement testing platforms and unit tests',
  'Learn and Test new technologies, frameworks and languages',
  'Server setup and management',
];

const Skills = ({ windowWidth, windowHeight }) => {
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
    </div>
  );
};

export default withDimensions(Skills);
