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

// ÜBUNG 4
//
// Anstatt statischer Daten für die Liste, möchten wir jetzt dynamisch Daten von einem Server laden. Beim Starten der Anwendung
// soll ein HTTP-Request erfolgen. Welche Lifecycle-Methode eignet sich hierfür?
//
// 1. Ersetze in dieser Methode die statische Zuweisung des State "todos" durch einen Request, der bei erfolgreicher Durchführung
//    diesen State mit Daten befüllt. Benutze hierfür die Methode fetch() (siehe Cheatsheet). Es soll ein GET-Request auf
//    http://todo.jecode.de/todos erfolgen. Nun sollten die geladenen Elemente entsprechend in der Liste angezeigt werden. Tipp: Achte
//    darauf, dass du in der Liste auf die richtigen Attribute der übergebenen Objekte zugreifst.
//
// 2. Neu angelegte ToDos sollen direkt per POST-Request (gleiche URL) an den Server gesendet werden. Die Form-Komponente ruft
//    onChildChanged als Callback beim Anlegen eines neuen ToDo auf. Der Parameter newItem ist dabei der Name des neuen ToDos.
//    Ersetze den Inhalt dieser Funktion durch den Request und füge diesem entsprechend den Parameter "name" hinzu. Im Falle eines
//    erfolgreichen Calls, sollen die Daten nochmals neu vom Server geladen werden, damit das neue
//    Element in der Liste auch angezeigt wird. Wenn du den Request aus der vorherigen Aufgabe in eine eigene Methode auslagerst,
//    kannst du diesen nochmals verwenden. Achtung: this. beim Aufruf von Methoden nicht vergessen.


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
