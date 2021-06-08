import React, { useContext } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import Work2 from './components/Work2';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { animated, useTransition } from 'react-spring';
import Location, { LocationProvider } from './context/LocationProvider';

const Main = () => {
  const location = useLocation();
  const { state: reverse } = useContext(LocationProvider);

  const transitions = useTransition(location, {
    key: location.pathname,
    from: () => ({
      transform: `translate3d(0px,${reverse ? '-' : ''}100%,0px)`,
    }),
    enter: { transform: `translate3d(0px,0%,0px)` },
    leave: () => ({
      transform: `translate3d(0px,${reverse ? '' : '-'}100%,0px)`,
      position: 'absolute',
    }),
    // from: { transform: 'translate3d(0px,100%,0px)' },
    // enter: { transform: 'translate3d(0px,0%,0px)' },
    // leave: { transform: 'translate3d(0px,-50%,0px)', position: 'absolute' },
    // config: {
    //   duration: 500,
    // },
    // trail: 500,
    // reverse: flip,
    // delay: 100,
  });

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {transitions((style, item, t, key) => (
        <animated.div key={key} className="animated__div" style={style}>
          <Switch location={item}>
            {/* <Route
                exact
                path="/"
                render={(props) => {
                  return <Home {...props} anim={anim} />;
                }}
              /> */}
            <Route path="/" component={Home} exact />
            <Route path="/work2" component={Work} />
            <Route path="/work" component={Work2} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Location>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </Location>
  );
}

export default App;
