import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Closed from './pages/Closed';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact><Index /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/come-back-later"><Closed /></Route>
    </Switch>
  </Router>
);

export default App;
