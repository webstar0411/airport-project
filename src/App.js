import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Home/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
