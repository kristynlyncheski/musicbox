import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function DownArrow(props){
  return(
    <Link to="/details">
      <FontAwesome
        name='angle-down'
        size='3x'
      />
    </Link>
  )
};

export default DownArrow;
