import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
// import LoginMain from '../utils/LoginMain.js';

const DetailsContainer = React.createClass({
  getInitialState: function(){
    return{
      parent: 'details',
    };
  },
  componentDidMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="details"/>
        <div>
          <img src="http://pbs.twimg.com/media/CUSlMCDUcAA-wu7.jpg:thumb" />
          <div>All of the Lights</div>
          <div>Kanye West</div>
        </div>
        <Footer parentComponent="details" />
      </div>
    )
  }
});

export default DetailsContainer;
