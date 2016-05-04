import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import LoginMain from '../utils/LoginMain';
// import RecComp from '../components/RecComp';
import RecommendedCard from '../components/RecommendedCard';
// import DetailsContainer from './DetailsContainer';
import ajaxHelpers from '../utils/ajaxHelpers';



const Recommendations = React.createClass({
  getInitialState: function(){
    return{
      recommendedSongs: [
        {
          song_title: "",
          song_id: "",
          preview: "",
          album: "",
          img: "",
          artist_name: [],
          artist_id: [],
        }
      ],
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
          song_title: track.name,
          song_id: track.id,
          preview: track.preview_url,
          album: track.album.name,
          img: track.album.images[0].url,
          artist_name: [],
          artist_id: [],
        };
        for (var j = 0; j < track.artists.length; j++){
          savedTracks.tracks[i].artist_name.push(track.artists[j].name);
          savedTracks.tracks[i].artist_id.push(track.artists[j].id);
        };
      };
      console.log("savedTracks",savedTracks);
      // console.log("savedTracks.tracks",savedTracks.tracks);

      that.setState({recommendedSongs: savedTracks.tracks});

    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });

    console.log("this.state.recommendedSongs",this.state.recommendedSongs);

  },
  componentWillMount: function(){
    {this.recommendAjax()}
  },

  handleSave: function(status){
    this.songAjaxFxn(true);
  },
  handleSkip: function(){
    this.songAjaxFxn(false);
  },
  songAjaxFxn: function(status){
    let tracklist = this.state.recommendedSongs;
    tracklist.shift();
    console.log(tracklist);
    this.setState({
      recommendedSongs:tracklist
    });
    if (this.state.recommendedSongs.length < 1){
      this.recommendAjax();
    };


    let track = this.state.recommendedSongs[0];
    console.log("track",track);
    let songInfo = {
      song_title: track.song_title,
      song_id: track.song_id,
      preview: track.preview,
      album: track.album,
      img: track.img,
      artist_name: track.artist_name[0],
      artist_id: track.artist_id[0]
    };

    console.log("songInfo",songInfo);

    // songInfo["selected"] = status;

    // console.log("songInfo",songInfo);

    ajaxHelpers.addSong(songInfo)
    .then(function(response){
      console.log(response);
    });
  },
  render: function(){
    return(
      <div className="main-container">
        <Header
          parentComponent="recommendations"
          showSongs={this.showSongs}
         />
       <RecommendedCard
           tracks={this.state.recommendedSongs}
         />
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
