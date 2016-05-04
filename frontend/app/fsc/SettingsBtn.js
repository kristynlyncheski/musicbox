import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');
import {Button, Icon} from 'react-materialize';


function SettingsBtn(props){
  return(
    <Link to="/settings">
      <Icon>person_pin</Icon>
    </Link>
  )
};

export default SettingsBtn;


//<FontAwesome
//   name='cog'
//   size='3x'
// />
