import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Settings from '../components/Settings';
// import LoginMain from '../utils/LoginMain.js';

const SettingsContainer = React.createClass({
  getInitialState: function(){
    return{
      parent: 'settings',
    };
  },
  componentDidMount: function(){
  },
  render: function(){
    return(
      <div className="main-container">
        <Header parentComponent="settings" />
          <div className="inner-containers">
            <h3>Kristyn's Details</h3>
            <Settings />
          </div>
        <Footer parentComponent="settings" />
      </div>
    )
  }
});

export default SettingsContainer;
