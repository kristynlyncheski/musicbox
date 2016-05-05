import React from 'react';

const Songs = React.createClass({
  render: function(){
    let savedSongs = this.props.savedSongs.map((song,index) => {

      return (
        <div key={index}>
          <h3 className="song-title">{song.song_title}</h3>
          <p className="artist-name">{song.artist_name.toString().replace(",",", ")}</p>
        </div>
      )
    });
    return(
      <div>
        {savedSongs}
      </div>
    )
  }
});

export default Songs;
