import React, {Component} from 'react';
import {connect} from 'react-redux';
import Firebase from '../Firebase/Firebase';
import RetrieveDataFromFirebase from './RetrieveDataFromFirebase';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            username  : 'User Name',
            email     :  'ahmedabd2018@gmail.com',
            password      :  'Allahis1'
            
        }

        this.onChangeSaveValue = this.onChangeSaveValue.bind(this);
        this.onClickDispatch   = this.onClickDispatch.bind(this);
    }


    onChangeSaveValue = (e) => {
        this.setState({inputValue: e.target.value})
    };

    onClickDispatch = (e) => {
        e.preventDefault()
        const stateValue = this.state.inputValue
        if (stateValue === "" || stateValue === " "){
            alert("Empty value")
        } else {
            this.setState({inputValue: ''});
            Firebase.database().ref("Notes").push({title: this.state.inputValue})
        }
    }

    render() {
        return (
            <div>
                <form action="submit">
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.onChangeSaveValue}
                        placeholder="type here"/>
                        <button onClick = {this.onClickDispatch} > Add </button>
                </form>
                <RetrieveDataFromFirebase/>
            </div>
        );
    }
}
const mapState = (state) => {
    return {data: state}
};

export default connect(mapState)(List);