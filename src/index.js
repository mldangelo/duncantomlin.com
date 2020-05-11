import React from 'react';
import { hydrate, render } from 'react-dom';
import './static/styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.querySelector('#root');

const Main = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const fac = () => (rootElement.hasChildNodes() ? hydrate(<Main />, rootElement) : render(<Main />, rootElement));

fac();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
