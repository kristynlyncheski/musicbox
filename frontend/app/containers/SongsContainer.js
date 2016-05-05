import React from 'react';
import {Link} from 'react-router';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Songs from '../components/Songs';
// import LoginMain from '../utils/LoginMain.js';
import ajaxHelpers from '../utils/ajaxHelpers';


const SongsContainer = React.createClass({
  getInitialState: function(){
    return{
      savedSongs: [],
    }
  },
  componentDidMount: function(){
    this.getSavedAjaxFxn();
    this.getUserPlaylists();
  },
  getSavedAjaxFxn: function(){

    let params = {
      user_id: localStorage.spotifyUserID,
      selected: true
    };

    let that = this;

    ajaxHelpers.getSavedSongs(params)
    .then(function(response){
      console.log(response);

      that.setState({
        savedSongs: response.data.songs
      });
    });

  },
  getUserPlaylists: function(){

    $.ajax({
      url: "https://api.spotify.com/v1/users/" + localStorage.spotifyUserID + "/playlists?limit=50",
      headers: {
       'Authorization': 'Bearer ' + localStorage.accessToken
       },
    }).done(function(response){
      console.log("getUserPlaylists response",response);
    });
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="saved" />
        <div className="inner-containers">
          <h3>Your Saved Songs</h3>
          <Songs savedSongs={this.state.savedSongs}/>
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
