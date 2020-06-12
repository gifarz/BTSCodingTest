import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { Checklist } from './Checklist/Checklist';

const routing = (
  <Router>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/checklist" component={Checklist} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
