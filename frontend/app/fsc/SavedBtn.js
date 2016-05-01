import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function SavedBtn(props){
  return(
    <Link to="/songs">
      <FontAwesome
        name='heart'
        size='3x'
      />
    </Link>
  )
};

export default SavedBtn;
