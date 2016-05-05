import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function DownArrow(props){
  return(
    <div className="down-arrow">
      <FontAwesome
        name='angle-down'
        size='4x'
        onClick={props.onClick}
      />
    </div>
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
