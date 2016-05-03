import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Callback from '../fsc/Callback';
import Recommendations from '../containers/Recommendations';
import DetailsContainer from '../containers/DetailsContainer';
import Settings from '../containers/Settings';
import SongsContainer from '../containers/SongsContainer';
import EventsContainer from '../containers/EventsContainer';
import LoginMain from '../utils/LoginMain.js';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/callback" component={Callback} />
      <Route path="/recommendations" component={Recommendations} onEnter={LoginMain.getAccessToken} />
      <Route path="/details" component={DetailsContainer} onEnter={LoginMain.getAccessToken} />
      <Route path="/settings" component={Settings} onEnter={LoginMain.getAccessToken} />
      <Route path="/songs" component={SongsContainer} onEnter={LoginMain.getAccessToken} />
      <Route path="/events" component={EventsContainer} onEnter={LoginMain.getAccessToken} />
    </Route>
  </Router>
);

export default routes;

// #access_token=:accessToken&token_type=:tokenType&expires_in=:expiresIn&state=:state
// ?access_token=:accessToken&token_type=:tokenType&expires_in=:expiresIn&state=:state&:history
