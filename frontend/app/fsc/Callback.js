// is there a way to redirect to recommendations rather than calling the component???

import React from 'react';
import LoginMain from '../utils/LoginMain';
import UserPrefs from '../utils/UserPrefs';
import Recommendations from '../containers/Recommendations';

const Callback = React.createClass({
  componentDidMount: function(){
    LoginMain.checkForToken();
  },
  render: function(){
    return(
      <div><img src="http://downgraf.com/wp-content/uploads/2014/09/01-progress.gif" width="300" /></div>
    )
  }
});

export default Callback;
