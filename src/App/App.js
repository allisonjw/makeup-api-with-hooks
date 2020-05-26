import React, { Component } from 'react';
import './App.scss';
import { getProducts } from '../Util/apiCall';
import { addFoundations, addEyeShadows, addBlushes, addBronzers, addLipsticks, addMascaras } from '../actions';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';

export class App extends Component {



  render() {
    return (
      <main className="App">
        <p>
          Makeup Api.
        </p>
        <Nav />
     </main>
    );
  };
};

export default App;
