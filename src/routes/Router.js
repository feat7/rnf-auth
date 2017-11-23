import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from "../screens/Home";
import Login from "../screens/Login";


const RouterComponent = () => {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Please Login" />
          <Scene key="home" component={Home} title="" />          
        </Scene>
      </Router>
    );
};
  
export default RouterComponent;