import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';

const HatsPage = () => (
    <div className='hats-page'>
        <h1>hats</h1>
    </div>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
};

export default App;
