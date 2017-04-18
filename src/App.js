import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';
import uuid from 'uuid';


class App extends Component {
  constructor(){
    super();
    this.onChildChanged = this.onChildChanged.bind(this);
    this.state = {
      todos: []
    }
  }

  onChildChanged(newItem) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(
        {
          id: uuid.v4(),
          text: newItem.text
        })
    }));
  }

  componentDidMount() {
    this.setState({
      todos: [
        {id: "1", text: "To Do 1"},
        {id: "2", text: "To Do 2"},
      ]
    });
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
