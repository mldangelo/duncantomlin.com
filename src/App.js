import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Closed from './pages/Closed';
import Contact from './pages/Contact';
import CreativeContent from './pages/CreativeContent';
import Criticism from './pages/Criticism';
import Curation from './pages/Curation';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact><Index /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/criticism"><Criticism /></Route>
      <Route path="/curation"><Curation /></Route>
      <Route path="/creative-content"><CreativeContent /></Route>
      <Route path="/come-back-later"><Closed /></Route>
      <Route path="/projects"><Projects /></Route>
      <Route path="/contact"><Contact /></Route>

      <Route status={404}><NotFound /></Route>
    </Switch>
  </Router>
);

export default App;
