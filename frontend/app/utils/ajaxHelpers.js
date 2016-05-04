import axios from 'axios';

const helpers = {
  addUser: function(user){
    return axios.post('http://localhost:3000/users.json', user);
  },

  updateUser: function(user){
    return axios.put('http://localhost:3000/users/' + user.user_id + '.json', user);
  },

  addSong: function(user){
    return axios.post('http://localhost:3000/songs.json', user);
  },

  addJoin: function(join){
    return axios.post('http://localhost:3000/songs.json', join);
  },


}

export default helpers;
