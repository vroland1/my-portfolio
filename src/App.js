import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import AboutMe from './containers/AboutMe/AboutMe'
import Experience from './containers/Experience/Experience'
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'

function App() {
  return (
    <div className="App">
    <NavigationItems/>
        <Switch>
          <Route exact path='/' component={AboutMe}></Route>
          <Route path='/experience' component={Experience}></Route>
        </Switch> 
    </div>
  );
}

export default App;
