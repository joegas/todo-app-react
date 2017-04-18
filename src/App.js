import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.onChildChanged = this.onChildChanged.bind(this);
  }

  onChildChanged(newItem) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(
        {
          id: uuid.v4(),
          text: newItem
        })
    }));
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default App;
