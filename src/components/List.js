import React, { Component } from 'react';

// 1. Lege im Konstruktor ein Array als State an. Es soll Objekte mit jeweils zwei Feldern (ID, Titel) aufnehmen.
// 2. Zeige die Objekte anhand des Namens in einer Liste (map-Funktion!). Vergesse dabei nicht den eindeutigen Key anzugeben.

class List extends Component {
    constructor() {
      super();
    }

    render() {
        return (
            <ul>
              // ...
            </ul>
        );
    }
}

export default List;
