import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: "1", text: "To Do 1"},
        {id: "2", text: "To Do 2"}
      ]
    }
  }

  render() {
    return (
        <ul>
        {this.state.todos.map(item => (
            <li key={item.id}>{item.text}</li>
        ))}
        </ul>
    );
  }
}

export default List;
