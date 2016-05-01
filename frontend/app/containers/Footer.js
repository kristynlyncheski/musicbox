import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');
import DownArrow from "../fsc/DownArrow";

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
            />
          </div>
          <div className="rec-details-container">
            <div>All of the Lights</div>
            <div>Kanye West</div>
            <DownArrow />
          </div>
          <div>
            <FontAwesome
              name='plus'
              size='3x'
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

//
// {this.leftIcon}
// {this.middleIcon}
// {this.rightIcon}
