import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    postDetails: {},
    isLoading: false,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        postDetails: data,
      }));
  };

  render() {
    return (
      <div>
        <h2>Szczegóły postu:</h2>
        <h3>
          {this.state.postDetails.title}
        </h3>
        <p>
          {this.state.postDetails.body}
        </p>
      </div>
    )
  }
}

export default PostDetails;