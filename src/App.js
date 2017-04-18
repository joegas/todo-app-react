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
      <List />
    );
  }
}

export default App;
