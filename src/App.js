import React, { Fragment, Component } from 'react';
import { Header } from './Header';
import TextSection from './TextSection';
import Counter from './Counter';
import PostDetails from './PostDetails';
import PostList from './PostList';
import Form from './Form';
import Footer from './Footer';

const TEXTS = {
  TITLE: 'Nagłówek aplikacji',
  MAIN_TEXT: 'Główna treść strony',
};

class App extends Component {
  state = {
    comments: []
  };

  handleAddComment = (comment) => this.setState({
    comments: [...this.state.comments, comment]
  });

  render() {
    return (
      <Fragment>
        <Header text={TEXTS.TITLE}/>
        <TextSection text={TEXTS.MAIN_TEXT}/>
        <Counter/>
        <PostDetails/>
        <PostList/>
        <Form handleAddComment={this.handleAddComment}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
