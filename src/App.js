import './App.css';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import Store from './Redux/Store/Store';
import List from './List/List';
import SignUp from './Authentication/SignUp/SignUp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.showComponents = this.showComponents.bind(this);
    }

    showComponents = () => {
        
        if (false) {
            return <List/>
        } else {
            return <SignUp/>
        }
    }

    render() {
        return (
            <Provider store={Store}>
                {this.showComponents()}
            </Provider>
        );
    }
}

export default App;