import React from 'react';
import LoginAuth from '../utils/LoginAuth';

const Callback = React.createClass({
  componentDidMount: function(){
    LoginAuth.checkForToken();
  },
  render: function(){
    return(
      <div>Callback</div>
    )
  }
});

export default Callback;
