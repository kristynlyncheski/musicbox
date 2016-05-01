import React from 'react';
import {Link} from 'react-router';

const SignUp = React.createClass({
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
