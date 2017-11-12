import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import AddHero from './AddHero';
import HeroDetail from './hero-detail'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/addHero' component={AddHero} />
        <Route exact path='/hero-detail/:heroId' component={HeroDetail} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
