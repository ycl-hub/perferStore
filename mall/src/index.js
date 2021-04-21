<<<<<<< HEAD
/* eslint-disable */
=======
>>>>>>> 701eae47c6fd0fa83bd29e614ffae035ec02bd06
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { mainRoutes } from './routers'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
<<<<<<< HEAD
import Mobile from './pages/Mobile'
import UseLogin from './pages/UserLogin'
import store from './redux/store'
import Admin from './pages/Admin'
/* 监视 redux 的状态改变 */
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/* 含有以下路由会匹配到以下组件里 再去这个组件里执行其他的操作 */}
        <Route path='/mobile' render={routeProps => <Mobile {...routeProps} />} />
        <Route path='/user' render={routeProps => <UseLogin {...routeProps} />} />
        <Route path='/admin' render={routeProps => <Admin {...routeProps} />} />

        {
          mainRoutes.map(route => {
            return <Route key={route.path} {...route} />
          })
        }
        <Redirect to='/404' />
      </Switch>
    </Router>
  </Provider>


=======

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
>>>>>>> 701eae47c6fd0fa83bd29e614ffae035ec02bd06
  ,
  document.getElementById('root')
);
