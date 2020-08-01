import React, {Component} from 'react';

class PostDetails extends Component {
  state = {
    postDetails: {},
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
      isError: false,
    });

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setTimeout(() => this.setState({
        postDetails: data,
        isLoading: false,
      }), 3000))
      .catch(e => this.setState({
        isLoading: false,
        isError: true,
      }));
  };

  render() {
    const {isLoading, isError, postDetails: {title, body}} = this.state;

    return (
      <div>
        <h2>Szczegóły postu:</h2>
        {isLoading && <div>Loading...</div>}

        {title && body && <>
          <h3>
            {this.state.postDetails.title}
          </h3>
          <p>
            {this.state.postDetails.body}
          </p>
        </>}

        {isError && <div>Błąd pobierania danych</div>}
      </div>
    )
  }
}

export default PostDetails;