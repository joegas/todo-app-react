import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';


class App extends Component {
  constructor(){
    super();
    this.onChildChanged = this.onChildChanged.bind(this);
    this.state = {
      tickets: []
    }
  }

  onChildChanged(newItem) {
    this.setState((prevState) => ({
      tickets: prevState.tickets.concat(
        {
          id:newItem.id,
          text: newItem.text
        })
    }));
  }

  componentDidMount() {
    this.setState({
      tickets: [
        {id: "1", text: "Example1"},
        {id: "2", text: "Example2"},
      ]
    });
  }

  componentWillUnmount() {
    this.setState({
      tickets: []
    });
  }

  render() {
    return (
      <div>
        <List listItems={this.state.tickets} />
        <Form callbackParent={this.onChildChanged} />
      </div>
    );
  }
}

export default App;
