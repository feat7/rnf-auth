import React from 'react';
import { Home } from "./src/screens/Home";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import CounterComponent from "./src/components/CounterComponent";

const store = createStore(reducers);

class App extends React.Component {
  
  state = {
    counter: 0
  }

  render() {
    return (
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    );
  }
}

export default App;