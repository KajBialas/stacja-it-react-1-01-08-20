import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  state = {
    postList: [],
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
      isError: false,
    });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setTimeout(() => this.setState({
        postList: data,
        isLoading: false,
      }), 3000))
      .catch(e => this.setState({
        isLoading: false,
        isError: true,
      }));
  };

  renderPostList = () => this.state.postList.map((postElement) => (
    <Link to={`/post/${postElement.id}`} key={postElement.id}>{postElement.title}</Link>
  ));

  render() {
    const {isLoading, isError, postList} = this.state;

    return (
      <div>
        <h2>Lista postów:</h2>
        {isLoading && <div>Loading...</div>}
        {postList.length ? this.renderPostList() : null}
        {isError && <div>Błąd pobierania danych</div>}
      </div>
    )
  }
}

export default PostList;