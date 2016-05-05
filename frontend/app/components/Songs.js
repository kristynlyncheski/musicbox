import React from 'react';
import {Collection, CollectionItem, Dropdown, Button, NavItem} from 'react-materialize';
import {DropdownButton, MenuItem} from 'react-bootstrap';


const DropdownComp = React.createClass({
  render: function(){
    let playlists = this.props.playlists.map((playlist,index) => {
      return(
        <MenuItem key={index} eventKey={[playlist.playlist_id,this.props.songId]}>{playlist.playlist_name}</MenuItem>
      )
    });
    return(
      <DropdownButton
        title=""
        key={this.props.index}
        id={`dropdown-basic-${this.props.index}`}
        onSelect={this.props.onSelect}
      >
        {playlists}
      </DropdownButton>
    )
  },
});

const Songs = React.createClass({
  render: function(){
    // let playlists = this.props.playlists.map((playlist,index) => {
    //   return(
    //     <MenuItem key={index} eventKey={playlist.playlist_id}>{playlist.playlist_name}</MenuItem>
    //   )
    // });
    let savedSongs = this.props.savedSongs.map((song,index) => {
      return (
        <div key={index}>
          <div >
            <h3 className="song-title">{song.song_title}</h3>
            <p className="artist-name">{song.artist_name.toString().replace(",",", ")}</p>
          </div>
          <DropdownComp
            playlists={this.props.playlists}
            songId={song.song_id}
            index={index}
            onSelect={this.props.handlePlaylistAdd}
          />

        </div>
      );
    });
    let savedSongsReverse = savedSongs.reverse();
    return(
      <div>
        {savedSongsReverse}
      </div>
    )
  }
});

export default Songs;
// <select value="">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>
