import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Template from './components/template'; // fallback for lazy pages

const Index = lazy(() => import('./pages/Index'));

const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Writing = lazy(() => import('./pages/Writing'));
const Columbia = lazy(() => import('./pages/Columbia'));
const Closed = lazy(() => import('./pages/Closed'));

const App = () => (
  <Router>
    <Suspense fallback={<Template />}>
      <Switch>
        <Route exact path="/"><Index /></Route>
        <Route path="/columbia-m-arch-application-materials"><Columbia /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/writing"><Writing /></Route>
        {/* experiments */}
        <Route path="/experiments/1"><Closed /></Route>
        <Route status={404}><NotFound /></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
