import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
    comments: [],
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.inputValue],
      inputValue: ''
    });
  };

  renderComments = () => this.state.comments.map((comment, index) => <div key={index}>{comment}</div>);

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <h2>Dodaj komentarz</h2>
        <form onSubmit={this.handleSubmitForm}>
          <input value={inputValue} onChange={this.handleInputChange}/>
          <button type="submit">SUBMIT</button>
        </form>
        <h2>Lista komentarzy:</h2>
        {this.renderComments()}
      </div>
    )
  }
}

export default Form;