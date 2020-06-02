import React from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Categories from '../Categories/Categories';
import Container from '../Container/Container';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
    return (
      <>
      <Container />
      <Switch >
        <Route exact path='/' render={() => <> <Nav /> </>} />
        <Route path='./container' render={() => <>  <Nav /> <Container /> </>} />
        <Route path='./categories' render={() => <>  <Nav /> <Categories /> </>} />
     </Switch >
     </>
    );
};

export default App;