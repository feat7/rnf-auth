import React, {Component} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";

class CounterComponent extends Component {


    onButtonPress() {
        this.props.dispatch({type: 'counter_increment', payload: 1});
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
    return { state: state.counter, dispatch: state.dispatch }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect(mapStateToProps)(CounterComponent);