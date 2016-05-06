import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import UpArrow from '../fsc/UpArrow';
// import LoginMain from '../utils/LoginMain.js';
import {Button, Icon} from 'react-materialize';

const DetailsContainer = React.createClass({
  getInitialState: function(){
    return{
      parent: 'details',
      showingTrack: 0,
    };
  },
  componentDidMount: function(){
  },
  render: function(){
    let tracks = this.props.tracks.map((track,index) => {

      // add a preview url on click of play button


      return (
        <div key={index}>
          <div className="track-details">
            <div className="details-img">
              <img src={track.img} />
            </div>
            <div className="details-info">
              <p className="details-song-title">{track.song_title}</p>
              <p className="details-artist-name">{track.artist_name.toString().replace(",",", ")}</p>
              <p className="details-album-name">{track.album}</p>
              <div className="play-btn">
                <Icon className="play-btn-icon">play_circle_filled</Icon>
                <span>Click to listen!</span>

              </div>
            </div>
          </div>
          <hr />
          <div className="event-details">
            <h3>Events To Come!</h3>
          </div>
        </div>
      )
    });
    let index = this.state.showingTrack;

    return(
      <div>
        {tracks[index]}
      </div>
    )
  }
});

export default DetailsContainer;

// <div className="main-container">
//   <Header parentComponent="details"/>
//   <UpArrow />
//   <div>
//     <img src="http://pbs.twimg.com/media/CUSlMCDUcAA-wu7.jpg:thumb" />
//     <div>All of the Lights</div>
//     <div>Kanye West</div>
//   </div>
//   <Footer parentComponent="details" />
// </div>
