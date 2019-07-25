import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.scss';

import LandingPage from './views/LandingPage';
import Main from './views/Main';
import PlayerStats from './views/PlayerStats';
import Teams from './views/Teams';
import GameStats from './views/GameStats';
import TeamInfo from './views/TeamInfo';
import NotFound from './views/NotFound';


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
            <Route exact path='/main' component={Main} />
            <Route exact path='/player' component={PlayerStats} />
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/game' component={GameStats} />
            <Route exact path='/team' component={TeamInfo} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;