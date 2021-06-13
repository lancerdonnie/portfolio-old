import React from 'react';
import './Skills.scss';
import withDimensions from '../wrapper/withDimensions';
import Icon from './Icon';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
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
          <motion.div
            style={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What I can do for you
          </motion.div>
          <div className="skilllistbody">
            <motion.div variants={variants1} initial="init" animate="anim">
              {skilllist.map((el, i) => {
                return (
                  <motion.p variants={variants2} className="skillitem" key={i}>
                    {el}
                  </motion.p>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

const variants1 = {
  init: {},
  anim: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 1.5,
    },
  },
};
const variants2 = {
  init: { opacity: 0, y: 50 },
  anim: { opacity: 1, y: 0 },
};

export default withDimensions(Skills);
