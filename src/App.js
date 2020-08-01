import React, { Fragment } from 'react';
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

function App() {
  return (
    <Fragment>
      <Header text={TEXTS.TITLE} />
      <TextSection text={TEXTS.MAIN_TEXT} />
      <Counter />
      <PostDetails />
      <PostList />
      <Form />
      <Footer/>
    </Fragment>
  );
}

export default App;
