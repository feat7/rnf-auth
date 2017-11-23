import React from 'react';
import { Home } from "./src/screens/Home";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import MainNavigator from "./src/routes/MainNavigator";
import { Font } from "expo";
import * as firebase from "firebase";
import {
  FN_apiKey, FN_authDomain, FN_databaseURL,
  FN_projectId, FN_storageBucket, FN_messagingSenderId
} from "react-native-dotenv";

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

var config = {
  apiKey: FN_apiKey,
  authDomain: FN_authDomain,
  databaseURL: FN_databaseURL,
  projectId: FN_projectId,
  storageBucket: FN_storageBucket,
  messagingSenderId: FN_messagingSenderId
};

firebase.initializeApp(config);

export default App;