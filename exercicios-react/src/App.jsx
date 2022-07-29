// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import { Component } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Content/>
        <Footer/>
      </div>
    )
  }
}
export default App;