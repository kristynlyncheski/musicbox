import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const Recommendations = React.createClass({
  render: function(){
    return(
      <div>
        <Header parentComponent="recommendations"/>
        <div>
          <img src="http://pbs.twimg.com/media/CUfeeoDWUAA-Q_N.jpg" />
        </div>
        <Footer parentComponent="recommendations" />
      </div>
    )
  }
});

export default Recommendations;
