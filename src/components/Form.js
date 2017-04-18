import React, { Component } from 'react';

// ÜBUNG 3
//
// 1. Definiere im 'constructor' den State und weise den State dem Input über das Value-Attribut zu.
//
// 2. Sobald sich das Input-Field ändert, soll der Wert im State gespeichert werden. Füge hierzu den Event-Handler 'onChange'
//    im bereits angelegten 'Input-Field' hinzu, der die Funktion handleChange aufruft (mittels 'this.handleChange').
//    In dieser Funktion soll der State 'text' neu gesetzt werden.
//
// 3. Beim Klick auf den Button wollen wir den eingegeben Wert an die App-Komponente übermitteln. benutze dafür den Event-Handler
//    'onSubmit', der 'handleChange' aufruft.


class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
    render() {
        return (
            <div>
              <form>
                <input type="text" />
                <button className="button-primary">Add</button>
              </form>
            </div>
        );
    }

    handleChange(e) {
      // Zugriff auf Value des Input Fields mit "e.target.value"
    }

    handleSubmit(e) {
      e.preventDefault(); // Neuladen der Seite verhindern
      this.props.callbackParent(this.state.text)
    }
}

export default Form;
