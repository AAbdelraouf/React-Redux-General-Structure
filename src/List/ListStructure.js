import React, {Component} from 'react';

class ListStructure extends Component {
    render() {
        return (
            <li>
                {this.props.notes}
            </li>
        );
    }
}

export default ListStructure;