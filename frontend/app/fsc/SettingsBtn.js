import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function SettingsBtn(props){
  return(
    <Link to="/settings">
      <FontAwesome
        name='cog'
        size='3x'
      />
    </Link>
  )
};

export default SettingsBtn;
