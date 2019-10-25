import React from 'react';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.components';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
