import React, { Component } from 'react';
import './App.scss';

import LandingPage from './views/LandingPage';
import Main from './views/Main';
import PlayerStats from './views/PlayerStats';
import TeamStats from './views/TeamStats';
import GameStats from './views/GameStats';
import NotFound from './views/NotFound';

import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/player' component={PlayerStats} />
            <Route exact path='/team' component={TeamStats} />
            <Route exact path='/game' component={GameStats} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;