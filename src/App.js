import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Work2 from './components/Work2';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import useStore from './utils/store';

const Main = () => {
  const location = useLocation();

  return (
    <div
      className="animate__div"
      style={{ height: '100vh', width: '100%', position: 'relative' }}
    >
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <RouteWrapper>
              <Home />
            </RouteWrapper>
          </Route>
          <Route path="/work">
            <RouteWrapper>
              <Work2 />
            </RouteWrapper>
          </Route>
          <Route path="/skills">
            <RouteWrapper>
              <Skills />
            </RouteWrapper>
          </Route>
          <Route path="/contact">
            <RouteWrapper>
              <Contact />
            </RouteWrapper>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

const variants = {
  init1: { y: '-100%' },
  init2: { y: '100%' },
  animate: { y: 0 },
  exit1: { y: '100%', position: 'absolute' },
  exit2: { y: '-100%', position: 'absolute' },
};

const RouteWrapper = ({ children }) => {
  const isReverse = useStore((state) => state.isReverse);

  return (
    <motion.div
      variants={variants}
      initial={isReverse ? 'init1' : 'init2'}
      animate="animate"
      exit={isReverse ? 'exit1' : 'exit2'}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
