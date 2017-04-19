import React, { Component } from 'react';
import List from './components/List.js';
import Form from './components/Form.js';
import uuid from 'uuid';

// ÜBUNG 4
//
// Anstatt statischer Daten für die Liste, möchten wir jetzt dynamisch Daten von einem Server laden. Beim Starten der Anwendung
// soll ein HTTP-Request erfolgen. Welche Lifecycle-Methode eignet sich hierfür?
//
// 1. Ersetze in dieser Methode die statische Zuweisung des State "todos" durch einen Request, der bei erfolgreicher Durchführung
// diesen State mit Daten befüllt. Benutze hierfür die Methode fetch() (siehe Cheatsheet). Es soll ein GET-Request auf
// http://todo.jecode.de/todos erfolgen. Nun sollten die geladenen Elemente entsprechend in der Liste angezeigt werden. Tipp: Achte
// darauf, dass du in der Liste auf die richtigen Attribute der übergebenen Objekte zugreifst.
//
// 2. Neu angelegte ToDos sollen direkt per POST-Request (gleiche URL) an den Server gesendet werden. Die Form-Komponente ruft
// onChildChanged als Callback beim Anlegen eines neuen ToDo auf. Der Parameter newItem ist dabei der Name des neuen ToDos.
// Ersetze den Inhalt dieser Funktion durch den Request und füge diesem entsprechend den Parameter "name" hinzu. Im Falle eines
// erfolgreichen Calls, sollen die Daten nochmals neu vom Server geladen werden, damit das neue
// Element in der Liste auch angezeigt wird. Wenn du den Request aus der vorherigen Aufgabe in eine eigene Methode auslagerst,
// kannst du diesen nochmals verwenden. Achtung: this. beim Aufruf von Methoden nicht vergessen.


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
          text: newItem
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
