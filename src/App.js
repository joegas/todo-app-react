import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';


class App extends Component {
  constructor(){
    super();
    this.onChildChanged = this.onChildChanged.bind(this);
    this.state = {
      todos: []
    }
  }

  getTodos() {
    fetch("http://todo.jecode.de/todos")
      .then(response => response.json())
      .then(response.json() => {
        this.setState({
          todos: json
        });
      });
  }

  postTodo(name) {
    fetch("http://todo.jecode.de/todos", {
      method: 'POST',
      body: JSON.stringify({
        'name': name
      })
      }).then(
        this.getTodos()
      );
  }

  onChildChanged(newItem) {
    this.postTodo(newItem);
  }

  componentDidMount() {
    this.getTodos();
  }

  componentWillUnmount() {
    this.setState({
      todos: []
    });
  }

  render() {
    return (
      <div>
        <List listItems={this.state.todos} />
        <Form callbackParent={this.onChildChanged} />
      </div>
    );
  }
}

export default App;
