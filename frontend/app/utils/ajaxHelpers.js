import axios from 'axios';

const helpers = {
  addUser: function(user){
    return axios.post('http://localhost:3000/users.json', user);
  },

  updateUser: function(user){
    return axios.put('http://localhost:3000/users/' + user.user_id + '.json', user);
  },

  getUserTopLists: function(user){
    return axios.get('http://localhost:3000/users/' + user.user_id + '.json', user);
  },

  addSong: function(user){
    return axios.post('http://localhost:3000/songs.json', user);
  },

  addUserSong: function(selectionInfo){
    return axios.post('http://localhost:3000/songs_users.json', selectionInfo);
  },

  getSavedSongs: function(user){
    return axios.get('http://localhost:3000/songs/saved/' + user.user_id + '.json');
  },


}

export default helpers;
