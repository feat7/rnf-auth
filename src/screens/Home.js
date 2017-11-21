import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

export default class Home extends Component {
    render() {
        return (
            <View style={{
                flex:1,backgroundColor: '#1dc16f', alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    Hello!
                </Text>
                <Button title="Open Login" onPress={() => this.props.navigation.navigate("Login")}></Button>
            </View>
        );
    }
}