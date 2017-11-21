import React, {Component} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions";

class CounterComponent extends Component {


    onButtonPress() {
        // this.props.increment();
        this.props.increment();
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.state.counter}</Text>
                <Button title="Increment"
                onPress={this.onButtonPress.bind(this)}>
                </Button>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { state: state.counter }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps, actions)(CounterComponent);