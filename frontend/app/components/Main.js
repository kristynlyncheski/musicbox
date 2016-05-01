import React from 'react';
require('../styles/Styles.css');


const Main = React.createClass({
  render: function(){
    return(
      <div className="container">
        {this.props.children}
      </div>
    )
  }
});

export default Main;
