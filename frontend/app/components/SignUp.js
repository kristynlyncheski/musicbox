import React from 'react';
import {Link} from 'react-router';
import LoginMain from '../utils/LoginMain.js';

const SignUp = React.createClass({
  componentWillMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    return(
      <div className="main-container">
        This is SignIn.
        <Link to="/recommendations">
          <button>Click</button>
        </Link>
      </div>
    )
  }
});

export default SignUp;
