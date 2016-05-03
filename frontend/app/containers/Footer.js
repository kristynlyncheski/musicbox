import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');
// import DownArrow from "../fsc/DownArrow";
import Recommendations from "../containers/Recommendations";

const Header = React.createClass({
  handleFooter: function() {
    if (this.props.parentComponent == "settings") {
      return;
    } else if (this.props.parentComponent == "recommendations") {
      return(
        <div className="footer-container">
          <div>
            <FontAwesome
              name='times'
              size='3x'
              onClick={this.props.handleSkip}
            />
          </div>
          <div>
            <FontAwesome
              name='plus'
              size='3x'
              onClick={this.props.handleSave}
            />
          </div>
        </div>
      );
    } else if (this.props.parentComponent == "details") {
      return(
        <div className="footer-container">
          <div>
            <FontAwesome
              name='times'
              size='3x'
            />
          </div>
          <div>
            <FontAwesome
              name='plus'
              size='3x'
            />
          </div>
        </div>
      );
    } else {
      return
    }
  },
  render: function(){
    return(
      <div>
        {this.handleFooter()}
      </div>
    )
  }
});

export default Header;
