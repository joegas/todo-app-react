import React, { Component } from 'react';

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
