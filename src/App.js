import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';

import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route  path='/signin' component={SignInAndSignUp} />
        </Switch>
    </div>
  );
};

export default App;
