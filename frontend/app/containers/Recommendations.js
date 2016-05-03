import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
// import LoginMain from '../utils/LoginMain.js';

const Recommendations = React.createClass({
  componentDidMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="recommendations"/>
        <div className="rec-img">
          <img src="http://pbs.twimg.com/media/CUfeeoDWUAA-Q_N.jpg" />
        </div>
        <Footer parentComponent="recommendations" />
      </div>
    )
  }
});

export default Recommendations;
