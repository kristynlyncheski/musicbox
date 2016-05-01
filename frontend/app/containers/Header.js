import React from 'react';
import Title from '../fsc/Title';
import MusicBtn from '../fsc/MusicBtn';
import SettingsBtn from '../fsc/SettingsBtn';
import SavedBtn from '../fsc/SavedBtn';
import UpArrow from '../fsc/UpArrow';

const Header = React.createClass({
  handleHeader: function() {
    if (this.props.parentComponent == "settings") {
      return(
        <div>
          <div>EMPTY</div>
          <SettingsBtn />
          <MusicBtn />
        </div>
      );
    } else if (this.props.parentComponent == "recommendations") {
      return(
        <div>
          <SettingsBtn />
          <Title />
          <SavedBtn />
        </div>
      );
    } else if (this.props.parentComponent == "details") {
      return(
        <div>
          <UpArrow />
        </div>
      );
    } else if (this.props.parentComponent == "saved") {
      return(
        <div>
          <MusicBtn />
          <SavedBtn />
          <div>EMPTY</div>
        </div>
      );
    } else {
      return
    }
  },
  render: function(){
    return(
      <div>
        {this.handleHeader()}
      </div>
    )
  }
});

export default Header;

//
// {this.leftIcon}
// {this.middleIcon}
// {this.rightIcon}
