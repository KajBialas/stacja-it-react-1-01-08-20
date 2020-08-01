import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Header text="Nagłówek aplikacji"/>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
