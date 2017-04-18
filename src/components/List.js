import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
            {this.props.listItems.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
        );
    }
}

export default List;
