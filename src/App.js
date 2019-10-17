import React from 'react';
import Homepage from './pages/homepage/homepage.components';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
