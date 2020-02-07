import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
