import React from 'react';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/Header/header.components';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.components';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.util';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop/hats' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
