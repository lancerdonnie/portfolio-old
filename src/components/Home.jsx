import React from 'react';
import './Home.scss';
import Svgs from './Svgs';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  return (
    <AnimatePresence>
      <div className="home">
        <Svgs />
        <div className="div1">
          <div>
            <motion.div
              style={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Adedeji Babajide
            </motion.div>
          </div>
        </div>
        <motion.div
          className="div2"
          style={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Software Developer who loves to build exiting things and learn
          everyday
        </motion.div>
        <MotionLink
          className="div4"
          to="/work"
          style={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span>Work</span>
          <i className="fas fa-level-down-alt"></i>
        </MotionLink>
      </div>
    </AnimatePresence>
  );
};

const MotionLink = motion(Link);

export default Home;
