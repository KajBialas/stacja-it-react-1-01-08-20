import React, { Component } from 'react';

class TextSection extends Component {
  handleClick = () => alert('Kliknięcie text section');

  render() {
    return (
      <p onClick={this.handleClick}>
        {this.props.text}
      </p>
    )
  }
}

export default TextSection;