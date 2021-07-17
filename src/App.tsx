import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/hello" exact component={Hello} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
