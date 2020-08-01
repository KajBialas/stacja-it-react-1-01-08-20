import React, { Fragment, Component } from 'react';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostList from '../components/PostList';
import Form from '../components/Form';

const TEXTS = {
  MAIN_TEXT: 'Główna treść strony',
};

class Home extends Component {
  state = {
    comments: []
  };

  handleAddComment = (comment) => this.setState({
    comments: [...this.state.comments, comment]
  });

  render() {
    return (
      <Fragment>
        <TextSection text={TEXTS.MAIN_TEXT}/>
        <Counter/>
        <PostList/>
        <Form handleAddComment={this.handleAddComment}/>
      </Fragment>
    );
  }
}

export default Home;
