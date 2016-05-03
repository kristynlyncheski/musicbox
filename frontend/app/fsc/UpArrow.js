import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function UpArrow(props){
  return(
    <Link to="/recommendations">
      <FontAwesome
        name='angle-up'
        size='3x'
        onClick={props.onClick}
      />
    </Link>
  )
};

export default UpArrow;
