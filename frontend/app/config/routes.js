import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import SignUp from '../components/SignUp';
import Recommendations from '../containers/Recommendations';
import DetailsContainer from '../containers/DetailsContainer';
import Settings from '../containers/Settings';
import SongsContainer from '../containers/SongsContainer';
import EventsContainer from '../containers/EventsContainer';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={SignUp} />
      <Route path="recommendations" component={Recommendations} />
      <Route path="details" component={DetailsContainer} />
      <Route path="settings" component={Settings} />
      <Route path="songs" component={SongsContainer} />
      <Route path="events" component={EventsContainer} />
    </Route>
  </Router>
);

export default routes;
