import React from 'react';

const Settings = React.createClass({

  render: function(){
    let tracks = this.props.topTracks.map((track,index) => {
      return (
        <div key={index}>
          <p>{index + 1}. {track.song_title} by {track.artists.toString().replace(",",", ")}</p>
        </div>
      )
    });

    let artists = this.props.topArtists.map((artist,index) => {
      return (
        <div key={index}>
          <p>{index + 1}. {artist.name}</p>
        </div>
      )
    });
    console.log("tracks",tracks)
    return(
      <div>
        <div className="user-top-list">
          <h3>Top Artists</h3>
          <div>{artists}</div>
        </div>
        <div className="user-top-list">
          <h3>Top Tracks</h3>
          <div>{tracks}</div>
        </div>
      </div>
    )
  }
});



export default Settings;
