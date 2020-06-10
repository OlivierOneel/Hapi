import React, { Component }from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
/* Componentns import */
import mainPage from './components/mainPage'
import helpFirstPage from './components/helper/helpFirstPage'
import victimFirstPage from './components/victim/victimFirstPage'


class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
      <div>
          <Switch>
            <Route path="/" exact component={mainPage} />
            <Route path="/help" exact component={helpFirstPage} />
            <Route path="/victims" exact component={victimFirstPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
