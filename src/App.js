import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Template from './components/template'; // fallback for lazy pages

import About from './pages/About';
import Closed from './pages/Closed';
import CreativeContent from './pages/CreativeContent';
import Criticism from './pages/Criticism';
import Columbia from './pages/Columbia';
import Projects from './pages/Projects';

const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Writing = lazy(() => import('./pages/Writing'));

const App = () => (
  <Router>
    <Suspense fallback={<Template />}>
      <Switch>
        <Route exact path="/"><Index /></Route>
        <Route path="/columbia-m-arch-application-materials"><Columbia /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/writing"><Writing /></Route>

        <Route path="/about"><About /></Route>
        <Route path="/criticism"><Criticism /></Route>
        <Route path="/creative-content"><CreativeContent /></Route>
        <Route path="/come-back-later"><Closed /></Route>
        <Route path="/projects"><Projects /></Route>

        <Route status={404}><NotFound /></Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
