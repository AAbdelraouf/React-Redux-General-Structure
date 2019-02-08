import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';

import List from './List/List';
import Store from './Redux/Store/Store';

class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <List/>
            </Provider>
        );
    }
}

export default App;