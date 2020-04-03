import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';



function App() {
  return (
    <div>
        <Switch>
            <Route  path='/' component={HomePage} />
        </Switch>
    </div>
  );
};

export default App;
