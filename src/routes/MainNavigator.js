import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from "../screens/Home";

const MainNavigator = StackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header:false
        })
    },
}, { headerMode: 'screen'});

export default MainNavigator;