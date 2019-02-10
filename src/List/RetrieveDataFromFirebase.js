import React, {Component} from 'react';
import Firebase from '../Firebase/Firebase'
import Store from '../Redux/Store/Store';
import {connect} from 'react-redux'
import  ListStructure  from './ListStructure';

class RetrieveDataFromFirebase extends Component {
    
    componentDidMount() {
        const itemsRef = Firebase.database().ref('Notes');
        itemsRef.on('child_added', (snapshot) => {
            let notesFromFirebase = snapshot.val();
            Store.dispatch({ type: 'Notes-From-Firebase', payLoad: notesFromFirebase.title })
        });
    };

    render() {
        return (
            <div>   
                <p>RetrieveDataFromFirebase Component</p>
                {this.props.dataFromReduxStore.map((data, key) => { 
                    return <p key = {key}><ListStructure notes = {data} /></p> 
                 })}
                 
            </div>
        );
    }
}

const mapStateToProps= (state) => {  return { dataFromReduxStore: state } }

export default connect(mapStateToProps)(RetrieveDataFromFirebase)