import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';

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
