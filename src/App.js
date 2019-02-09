import './App.css';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import Store from './Redux/Store/Store';
import List from './List/List'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fakeApiData: []
        };
    }

    // async componentDidMount() {

    //     try {
    //         const fetchData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //         const toJSON = await fetchData.json();
    //         console.log(toJSON)
    //         this.setState({
    //             fakeApiData: [
    //                 ...this.state.fakeApiData,
    //                 toJSON
    //             ]
    //         });
    //     } catch (error) {
    //         console.log("Error is:" + error)
    //     }
    // };

    render() {
        return (
            <Provider store={Store}>
                <List/>
            </Provider>
        );
    }
}

export default App;