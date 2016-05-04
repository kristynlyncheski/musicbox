import axios from 'axios';

const helpers = {
  addUser: function(user){
    return axios.post('http://localhost:3000/users.json', user);
  },

  addSong: function(user){
    return axios.post('http://localhost:3000/songs.json', user);
  },


}

export default helpers;
