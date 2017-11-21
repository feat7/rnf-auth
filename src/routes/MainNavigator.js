import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from "../screens/Home";
import Login from "../screens/Login";

const MainNavigator = StackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header:false
        })
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            header:false
        })
    },
}, { headerMode: 'screen'});

export default MainNavigator;