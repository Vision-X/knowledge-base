import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header.jsx';
import Landing from './Landing.jsx';



ReactDOM.render(
  <Router>
    <div>
      <Header />

    </div>
  </Router>
  <App />,
document.getElementById('root'));
registerServiceWorker();
