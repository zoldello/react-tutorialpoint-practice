import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
  , document.querySelector('#app'));
