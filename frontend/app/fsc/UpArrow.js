import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function UpArrow(props){
  return(
    <FontAwesome
      name='angle-up'
      size='5x'
      onClick={props.onClick}
      className="up-arrow"
    />
  )
};

export default UpArrow;
