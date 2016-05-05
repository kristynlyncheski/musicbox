import React from 'react';
var styles = require('../styles/Styles.css');
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const Main = React.createClass({
  getInitialState: function(){
    return{
      parent: '',
    };
  },
  render: function(){
    return(
      <div className="container">
        {this.props.children}
      </div>
    )
  }
});

export default Main;
