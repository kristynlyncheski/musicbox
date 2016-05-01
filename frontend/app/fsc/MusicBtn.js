import React from 'react';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

function MusicBtn(props){
  return(
    <Link to="/recommendations">
      <FontAwesome
        name='music'
        size='3x'
      />
    </Link>
  )
};

export default MusicBtn;
