import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Settings from '../components/Settings';
// import LoginMain from '../utils/LoginMain.js';
import ajaxHelpers from '../utils/ajaxHelpers';
import {Button} from 'react-materialize';

const SettingsContainer = React.createClass({
  getInitialState: function(){
    return{
      parent: 'settings',
      userInfo: {},
      topTracks: [],
      topArtists: []
    };
  },
  componentDidMount: function(){
    this.getUserTops();
  },
  getUserTops: function(){
    let user = {
      user_id: localStorage.spotifyUserID
    };

    let that = this;

    ajaxHelpers.getUserInfo(user)
    .then(function(response){
      // console.log(response);
      that.setState({
        userInfo: response.data.users[0]
      });
      that.getUserTopTracks();
      that.getUserTopArtists();
    });
  },
  getUserTopTracks: function(){
    let tracks = [this.state.userInfo.song_one, this.state.userInfo.song_two, this.state.userInfo.song_three];

    let topTracks = [];

    let that = this;

    for (var i = 0 ; i < tracks.length; i++){
      $.ajax({
        url: 'https://api.spotify.com/v1/tracks/' + tracks[i],
        headers: {
         'Authorization': 'Bearer ' + localStorage.accessToken
         },
      }).done(function(response){
        // console.log(response);

        let artistNames = [];

        for (var j = 0; j < response.artists.length; j++){
          artistNames.push(response.artists[j].name)
        };

        let topTrackInfo = {
          song_title: response.name,
          artists: artistNames
        }
        topTracks.push(topTrackInfo);
        // console.log("topTracks",topTracks)
        that.setState({
          topTracks: topTracks,
        });
        // console.log("state",that.state.topTracks);
      });
    };
  },
  getUserTopArtists: function(){
    let artists = [this.state.userInfo.artist_one, this.state.userInfo.artist_two, this.state.userInfo.artist_three];

    let topArtists = [];

    let that = this;

    for (var i = 0 ; i < artists.length; i++){
      $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artists[i],
        headers: {
         'Authorization': 'Bearer ' + localStorage.accessToken
         },
      }).done(function(response){
        console.log(response);

        let topArtistInfo = {
          name: response.name,
        }
        topArtists.push(topArtistInfo);
        that.setState({
          topArtists: topArtists,
        });
      });
    };
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="settings" />
        <div className="inner-containers">
          <h3>{this.state.userInfo.display_name}</h3>
          <p className="user-img"><img src={this.state.userInfo.img} /></p>
          <Settings
            userInfo={this.state.userInfo}
            topTracks={this.state.topTracks}
            topArtists={this.state.topArtists}
          />
        <Button waves='light' className="history-btn">See Your History</Button>
        </div>
        <Footer parentComponent="settings" />
      </div>
    )
  }
});

export default SettingsContainer;
