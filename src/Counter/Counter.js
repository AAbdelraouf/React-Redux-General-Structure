import React, {Component} from 'react';
import {connect} from 'react-redux';
import Store from '../Redux/Store/Store';

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
        if(stateValue === ""){ alert("Empty value") }
        else{
            Store.dispatch({ type: 'ADD', payLoad: stateValue });
            this.setState({ inputValue:'' })
        }

    }

    render() {
        return (
            <div>
                {/* <p>
                    {this.props.data.map((data, key) => {
                    return <div> <p key =  {key}> {data} </p>  </div>
                    })}
                </p> */}
                <form action="submit">
                    <input type="text" value = {this.state.inputValue} onChange = {this.onChangeSaveValue} placeholder="type here"/>
                    <button onClick={this.onClickDispatch}>Click here</button>
                </form>
                <p>
                    {this.props.data.map((data, key) => <li key = {key} > {data} </li> )}
                </p>

                <p>{this.state.inputValue}</p>

            </div>
        );
    }
}
const mapState = (state) => {
    return {data: state}
}
export default connect(mapState)(Counter);