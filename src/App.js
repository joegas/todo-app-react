import React, { Component } from 'react';
import List from './components/List.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      tickets: []
    }
  }

  componentDidMount() {
    this.setState({
      tickets: ["Example1", "Example2", "Example3", "Example4"]
    });
  }

  componentWillUnmount() {
    this.setState({
      tickets: []
    });
  }
  
  
  render() {
    return (
      <List listItems={this.state.tickets} />
    );
  }
}

export default App;
