import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';
import uuid from 'uuid';

// ÜBUNG 2
//
// 1. Erstelle im constructor einen State mit einem Feld (z.B. todos), das ein vorerst leeres Array beinhaltet
// 2. Dieses Array soll nun in der Methode componentDidMount() gefüllt werden. Dafür kannst das Array verwenden, 
//    das du bereits in der List Komponente erstellt hast.
// 3. Übergebe dieses Array als prop an die List Komponente. 
//    Die List Komponente muss zudem angepasst werden (props empfangen und den state dort entfernen).


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
          id: uuid.v4(),
          text: newItem.text
        })
    }));
  }

  componentDidMount() {
    this.setState({
      tickets: [
        {id: "1", text: "To Do 1"},
        {id: "2", text: "To Do 2"},
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
