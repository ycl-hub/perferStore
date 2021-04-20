/*eslint-disable*/
import React, { Component } from "react";
import { mobileRoutes } from "../routers";
import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Footer from "../components/MobileFooter";

export default class index extends Component {
  //退出
  /*   Exit = () => {
    this.props.history.push("/");
  }; */
  render() {
    return (
      <div>
        <Footer/>

   
          <Switch>
            {mobileRoutes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={(routeProps) => {
                    return <route.component {...routeProps} />;
                  }}
                />
              );
            })}
            <Redirect to={`/mobile/home`} />
          </Switch>
      
       
      </div>
    );
  }
}
