import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';
=======
>>>>>>> cac6b5cf2d04d60c65b66ccef80bc43f433080d1


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
<<<<<<< HEAD
      <List listItems={this.state.tickets} />
=======
      <div className="App">
        <button>Hello!</button>
      </div>
>>>>>>> cac6b5cf2d04d60c65b66ccef80bc43f433080d1
    );
  }
}

export default App;
