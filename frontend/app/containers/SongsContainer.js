import React from 'react';
import {Link} from 'react-router';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Songs from '../components/Songs';
// import LoginMain from '../utils/LoginMain.js';

const SongsContainer = React.createClass({
  componentDidMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="saved" />
        <div className="inner-containers">
          <h3>Your Saved Songs</h3>
          <Songs />
        </div>
        <Footer parentComponent="saved" />
      </div>
    )
  }
});

export default SongsContainer;


// <div className="main-container">
//   <Header parentComponent="saved" />
//   <div className="inner-containers">
//     <Link to="/songs">
//       <h3>Songs</h3>
//     </Link>
//     <Link to="/events">
//       <h3>Events</h3>
//     </Link>
//   </div>
//   <Songs />
//   <Footer parentComponent="saved" />
// </div>
