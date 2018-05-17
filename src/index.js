import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import './old-books.jpg';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header.jsx';
import Landing from './Landing.jsx';



ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={ Landing } />
    </div>
  </Router>,
document.getElementById('root'));
registerServiceWorker();
