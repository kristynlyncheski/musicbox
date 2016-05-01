import React from 'react';
import {Link} from 'react-router';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Songs from '../components/Songs';

const SongsContainer = React.createClass({
  render: function(){
    return(
      <div>
        <Header parentComponent="saved" />
        <div>
          <Link to="/songs">
            <h3>Songs</h3>
          </Link>
          <Link to="/events">
            <h3>Events</h3>
          </Link>
        </div>
        <Songs />
        <Footer parentComponent="saved" />
      </div>
    )
  }
});

export default SongsContainer;
