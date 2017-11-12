import React, {Component} from  'react';
import { Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import AddHero from './AddHero';
import Hero from './Hero';

const MainRoutes = () => {
  return (
    <div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/hero">Hero</Link></li>
        <li><Link to="/addhero">Add</Link></li>
      </ul>
      <hr/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/hero" component={Hero}/>
      <Route exact path="/addhero" component={AddHero}/>

    </div>
  );
};

export default MainRoutes;
