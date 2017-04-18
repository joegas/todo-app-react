import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {text: ""}
}
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                <button className="button-primary">Add</button>
              </form>
            </div>
        );
    }

    handleChange(e) {
      this.setState({text: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.props.callbackParent(newItem)
    }
}

export default Form;
