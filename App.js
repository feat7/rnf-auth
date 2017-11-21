import React from 'react';
import { Home } from "./src/screens/Home";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import MainNavigator from "./src/routes/MainNavigator";
import { Font } from "expo";

const store = createStore(reducers);

class App extends React.Component {
  
  state = {
    counter: 0
  }

  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;