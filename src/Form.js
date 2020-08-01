import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.setState({inputValue: ''});
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <h2>Dodaj komentarz</h2>
        <form onSubmit={this.handleSubmitForm}>
          <input value={inputValue} onChange={this.handleInputChange}/>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Form;