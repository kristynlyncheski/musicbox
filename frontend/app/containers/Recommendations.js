import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
// import LoginMain from '../utils/LoginMain';
import RecommendedCard from '../components/RecommendedCard';

const Recommendations = React.createClass({
  getInitialState: function(){
    return{
      recommendedSongs: [],
    };
  },
  recommendAjax: function(){
    //these need to be parameters in fxn(tracks,artists)

    let tracks = "2ZyuwVvV6Z3XJaXIFbspeE,0H04yVa3DJxoXbLBpAb7iV";
    let artists = "1uNFoZAHBGtllmzznpCI3s,2kucQ9jQwuD8jWdtR9Ef38";

    let that = this;

    //recommendation ajax
    $.ajax({
      url: "https://api.spotify.com/v1/recommendations?seed_tracks=" + tracks + "&seed_artists=" + artists + "&limit=20",
      headers: {
       'Authorization': 'Bearer ' + localStorage.accessToken
       },
    }).done(function(response){
      // console.log("response",response.tracks);

      var savedTracks = {
        tracks: [],
      };

      for (var i = 0; i < response.tracks.length; i++){
        let track = response.tracks[i];
        savedTracks.tracks[i] = {
          songTitle: track.name,
          songID: track.id,
          previewURL: track.preview_url,
          albumTitle: track.album.name,
          albumArt: track.album.images[0].url,
          artistName: [],
          artistID: [],
        };
        for (var j = 0; j < track.artists.length; j++){
          savedTracks.tracks[i].artistName.push(track.artists[j].name);
          savedTracks.tracks[i].artistID.push(track.artists[j].id);
        };
      };
      console.log("savedTracks",savedTracks);

      that.setState({recommendedSongs: savedTracks});

    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });

    console.log("this.state.recommendedSongs",this.state.recommendedSongs);

  },
  componentWillMount: function(){
    // LoginMain.getAccessToken();
    {this.recommendAjax()}
  },

  handleSave: function(){
    let tracklist = this.state.recommendedSongs;
    tracklist.tracks.shift();
    console.log(tracklist);
    this.setState({
      recommendedSongs:tracklist
    });
  },
  handleSkip: function(){
    let tracklist = this.state.recommendedSongs;
    tracklist.tracks.shift();
    console.log(tracklist);
    this.setState({
      recommendedSongs:tracklist
    });
  },

  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="recommendations" />
        <RecommendedCard tracks={this.state.recommendedSongs} />
        <Footer
          parentComponent="recommendations"
          tracks={this.state.recommendedSongs}
          handleSave={this.handleSave}
          handleSkip={this.handleSkip}
        />
      </div>
    )
  }
});

export default Recommendations;
//
// <div className="rec-img">
//   <img src="http://pbs.twimg.com/media/CUfeeoDWUAA-Q_N.jpg" />
// </div>
