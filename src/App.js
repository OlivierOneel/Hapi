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
            <Route path="/" component={mainPage} exact/>
            <Route path="/victims" component={VictimsFirst} exact/>
            <Route path="/help" component={HelpFirst}/>
            <Route path="/victims/2" component={VictimsSecond}/>
            <Route path="/victims/last" component={VictimsLast}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
