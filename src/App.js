import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
 
import VictimsFirst from "./victims/Pages/FirstPage"
import HelpFirst from "./help/Pages/FirstPage"
import mainPage from "./components/mainPage"
import VictimsSecond from "./victims/Pages/SecondPage"
import VictimsLast from "./victims/Pages/LastPage"
 


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
