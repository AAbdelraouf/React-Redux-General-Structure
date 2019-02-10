import './App.css';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import Store from './Redux/Store/Store';
import List from './List/List'


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