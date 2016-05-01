import React from 'react';
import {Link} from 'react-router';
import DownArrow from "../fsc/DownArrow";

const Header = React.createClass({
  handleFooter: function() {
    if (this.props.parentComponent == "settings") {
      return;
    } else if (this.props.parentComponent == "recommendations") {
      return(
        <div>
          <div>X</div>
          <div>All of the Lights</div>
          <div>Kanye West</div>
          <DownArrow />
          <div>+</div>
        </div>
      );
    } else if (this.props.parentComponent == "details" || this.props.parentComponent == "saved") {
      return(
        <div>
          <div>X</div>
          <div>+</div>
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
