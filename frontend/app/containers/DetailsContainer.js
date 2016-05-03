import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import UpArrow from '../fsc/UpArrow';
// import LoginMain from '../utils/LoginMain.js';

const DetailsContainer = React.createClass({
  getInitialState: function(){
    return{
      parent: 'details',
      showingTrack: 0,
    };
  },
  componentDidMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    let tracks = this.props.tracks.tracks.map((track,index) => {

      // add a preview url on click of play button

      return (
        <div key={index}>
          <div className="rec-img">
            <img src={track.albumArt} />
          </div>
          <p>{track.songTitle}</p>
          <p>{track.artistName.toString().replace(",",", ")}</p>
          <p>{track.albumName}</p>
          <div>
            <img src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" />
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
