import React, { Component } from 'react';

const TEXT = 'Treść strony';

class TextSection extends Component {
  handleClick = () => console.log('Kliknięcie text section');

  render() {
    return (
      <p onClick={this.handleClick}>
        {TEXT}
      </p>
    )
  }
}

export default TextSection;