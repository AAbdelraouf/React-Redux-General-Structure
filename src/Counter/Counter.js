import React, {Component} from 'react';
import {connect} from 'react-redux';
import Store from '../Redux/Store/Store';
import Firebase from '../Firebase/Firebase';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue : '' }

        this.onChangeSaveValue = this.onChangeSaveValue.bind(this);
        this.onClickDispatch = this.onClickDispatch.bind(this);
    }

    onChangeSaveValue = (e) => {this.setState({ inputValue: e.target.value })};

    onClickDispatch = (e) => {
        e.preventDefault()
        const stateValue = this.state.inputValue
        if(stateValue === ""){console.log("Empty value")}
        else{
            Store.dispatch({ type: 'ADD', payLoad: stateValue });
            this.setState({ inputValue:'' })
            Firebase.database().ref("Notes").push({ Note: this.state.inputValue })
        }
    }

    render() {
        return (
            <div>
                <form action="submit">
                    <input type="text" value = {this.state.inputValue} onChange = {this.onChangeSaveValue} 
                    placeholder="type here"/>
                    <button onClick={this.onClickDispatch}>Click here</button>
                </form>
                <p>
                    {this.props.data.map((data, key) => <li key = {key} > {data} </li> )}
                </p>

            </div>
        );
    }
}
const mapState = (state) => {
    return {data: state}
}
export default connect(mapState)(Counter);