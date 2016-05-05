import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function UpArrow(props){
  return(
    <FontAwesome
      name='angle-up'
      size='4x'
      onClick={props.onClick}
    />
  )
};

export default UpArrow;
