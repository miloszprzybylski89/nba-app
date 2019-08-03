import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';

import LandingPage from './views/LandingPage';
import PlayerStats from './views/PlayerStats';
import Teams from './views/Teams';
import GameStats from './views/GameStats';
import TeamInfo from './views/TeamInfo';
import NotFound from './views/NotFound';
import PlayerSelect from './views/PlayerSelect';
import RandomPlayers from './views/RandomPlayers';


import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";




class App extends Component {
  render() {
    return (
      <div className='App' >
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/playerStats' component={PlayerStats} />
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/gameStats' component={GameStats} />
            <Route exact path='/teamInfo' component={TeamInfo} />
            <Route exact path='/playerSelect' component={PlayerSelect} />
            <Route exact path='/randomPlayers' component={RandomPlayers} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;