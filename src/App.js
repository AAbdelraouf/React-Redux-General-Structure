import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Counter from './Counter/Counter';
import Store from './Redux/Store/Store';

class App extends Component {
  render() {
    return (
      <Provider store = {Store} className="App">
        <Counter />
      </Provider>
    );
  }
}

export default App;
