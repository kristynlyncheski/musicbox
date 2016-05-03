import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function DownArrow(props){
  return(
    <FontAwesome
      name='angle-down'
      size='3x'
      onClick={props.onClick}
    />
  )
};

export default DownArrow;
//
// <Link to="/details">
//   <FontAwesome
//     name='angle-down'
//     size='3x'
//     onClick={props.onClick}
//   />
// </Link>
