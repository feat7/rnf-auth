import React from 'react';
import { Home } from "./src/screens/Home";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import { Font } from "expo";
import * as firebase from "firebase";
import {
  FN_apiKey, FN_authDomain, FN_databaseURL,
  FN_projectId, FN_storageBucket, FN_messagingSenderId
} from "react-native-dotenv";
import Router from "./src/routes/Router";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

class App extends React.Component {

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    var config = {
      apiKey: FN_apiKey,
      authDomain: FN_authDomain,
      databaseURL: FN_databaseURL,
      projectId: FN_projectId,
      storageBucket: FN_storageBucket,
      messagingSenderId: FN_messagingSenderId
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;