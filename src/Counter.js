import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 10,
    secondCounter: 20,
  };

  handleIncrementCounter = () => this.setState({
    counter: this.state.counter + 1
  });

  handleIncrementSafeCounter = () => this.setState(
    (prevState) => ({counter: prevState.counter + 1})
  );

  render() {
    return (
      <div>
        <p>
          Wartość licznika: {this.state.counter}
        </p>
        <button onClick={this.handleIncrementSafeCounter}>ZWIĘKSZ</button>
      </div>
    )
  }
}

export default Counter;