import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 10,
    secondCounter: 20,
  };

  componentDidMount() {
    console.log('MOUNT');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('UPDATE');
  }

  handleIncrementCounter = () => this.setState({
    counter: this.state.counter + 1
  });

  handleDecrementCounter = () => this.setState({
    counter: this.state.counter - 1
  });

  handleResetCounter = () => this.setState({
    counter: 10
  });

  handleIncrementSafeCounter = () => this.setState(
    (prevState) => ({counter: prevState.counter + 1})
  );

  render() {
    console.log('RENDER');
    return (
      <div>
        <p>
          Wartość licznika: {this.state.counter}
        </p>
        <button onClick={this.handleIncrementCounter}>ZWIĘKSZ</button>
        <button onClick={this.handleDecrementCounter}>ZMNIEJSZ</button>
        <button onClick={this.handleResetCounter}>RESET</button>
      </div>
    )
  }
}

export default Counter;