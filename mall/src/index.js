import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { mainRoutes } from './routers'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      {
        mainRoutes.map(route => {
          return <Route key={route.path} {...route}/>
        })
      }
      <Redirect to='/'/>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
