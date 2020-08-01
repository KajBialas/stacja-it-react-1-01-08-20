import React, { Fragment, Component } from 'react';
import { Header } from '../components/Header';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostDetails from '../components/PostDetails';
import PostList from '../components/PostList';
import Form from '../components/Form';
import Footer from '../components/Footer';

const TEXTS = {
  TITLE: 'Nagłówek aplikacji',
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

export default Home;
