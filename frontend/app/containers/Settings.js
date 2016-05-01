import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const Settings = React.createClass({
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
