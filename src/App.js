import React, { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import Work2 from './components/Work2';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 15000);
  });
  const [anim, setAnim] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home {...props} anim={anim} />;
          }}
        />

        <Route exact path="/work" component={Work} />
        <Route exact path="/work2" component={Work2} />

        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
