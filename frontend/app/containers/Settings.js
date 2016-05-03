import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
// import LoginMain from '../utils/LoginMain.js';

const Settings = React.createClass({
  getInitialState: function(){
    return{
      parent: 'settings',
    };
  },
  componentDidMount: function(){
    // LoginMain.getAccessToken();
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="settings" />
        This is Settings
        <Footer parentComponent="settings" />
      </div>
    )
  }
});

export default Settings;
