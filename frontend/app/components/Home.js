//CHANGE TO A HOME SCREEN WITH A LOADING ICON
//CHECK IF HAVE TOKEN
//IF HAVE TOKEN, REDIRECT TO RECOMMENDATIONS SCREEN
//HAVE A COUNTDOWN FOR REDIRECT?

import React from 'react';
import {Link} from 'react-router';
import LoginMain from '../utils/LoginMain.js';

const Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function(){
    let that = this;
    setTimeout(function(){
      LoginMain.getAccessToken();
      setTimeout(function(){
        that.context.router.push('/recommendations');
      },1500);
    },1500);
  },
  render: function(){
    return(
      <div className="main-container">
        <h1>Welcome to TBD</h1>
        <p>If you're not redirected, <span onClick={LoginMain.getAccessToken}>click here</span></p>
      </div>
    )
  }
});

export default Home;

// <Link to="/recommendations">
//   <button>Click</button>
// </Link>
