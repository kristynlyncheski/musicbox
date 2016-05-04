import KEYS from '../private/KEYS';
var React = require('react');
var Router = require('react-router');
import ajaxHelpers from './ajaxHelpers';

const SCOPES = "user-top-read"
//user-read-private user-read-email


const LoginMain = {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getAccessToken: function(){
    if (!localStorage.accessToken || localStorage.expireTime < Date()) {
      window.location = "https://accounts.spotify.com/authorize?client_id=" + KEYS.CLIENT_ID + "&redirect_uri=" + KEYS.REDIRECT_URI + "&scope=" +  encodeURIComponent(SCOPES) + "&response_type=token&state=123";
    } else {
      console.log("got access token from local storage");

      // return localStorage.accessToken;
    }
  },

  // checking for token now
  getParameter: function(name,url){
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
    //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  },
  checkForToken: function(){

    let accessToken = this.getParameter("access_token");
    let expiresIn = this.getParameter("expires_in");
    let errorParam = this.getParameter("error");

    if (!errorParam) {
      $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
         'Authorization': 'Bearer ' + accessToken
         },
      }).done(function(response){
        console.log("LoginAuth.checkForToken response",response);

        let expireTime = new Date();
        expireTime.setSeconds(expireTime.getSeconds() + expiresIn);

        localStorage.setItem("accessToken",accessToken);
        localStorage.setItem("expires",expireTime);
        localStorage.setItem("spotifyUserID",response.id);
        localStorage.setItem("spotifyEmail",response.email);
        localStorage.setItem("spotifyName",response.display_name);

        let userInfo = {
          user_id: response.id,
          display_name: response.display_name,
          email: response.email,
          img: response.images[0].url
        };

        ajaxHelpers.addUser(userInfo)
        .then(function(response){
          console.log(response);
        });


        console.log("userInfo",userInfo);

        //This is where user prefs and info are called (from the callback page)
        // this.UserPrefs();


        //*** going to have to create a user record if needed to the database
        //*** otherwise have to find the matching account in my database using ID & email

        // window.location = stateParam;

      }).fail(function(response){
        console.log("it failed");
        console.log(response);
      });
    };
  },
  getUserPrefs: function(){
    let artistString;
    let trackString;

    //artists ajax call

    $.ajax({
      url: "https://api.spotify.com/v1/me/top/artists?limit=3",
      headers: {
       'Authorization': 'Bearer ' + localStorage.accessToken
       },
    }).done(function(response){
      // console.log("response",response);
      console.log("artist response 1",response.items[0].id);
      let artistID1 = response.items[0].id;
      console.log("artist response 2",response.items[1].id);
      let artistID2 = response.items[1].id;
      console.log("artist response 3",response.items[2].id);
      let artistID3 = response.items[2].id;
      artistString = artistID1 + "," + artistID2;

      let userTopArtists = {
        artists: [],
      };
      for (var i = 0; i < response.items.length; i++){
        userTopArtists.artists[i] = {
          artistName: response.items[i].name,
          artistID: response.items[i].id,
        };
      };

      console.log("userTopArtists",userTopArtists);


    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });

    //tracks ajax call
    $.ajax({
      url: "https://api.spotify.com/v1/me/top/tracks?limit=3",
      headers: {
       'Authorization': 'Bearer ' + localStorage.accessToken
       },
    }).done(function(response){
      console.log("response",response);
      console.log("track response 1",response.items[0].id);
      let trackID1 = response.items[0].id;
      console.log("track response 2",response.items[1].id);
      let trackID2 = response.items[1].id;
      trackString = trackID1 + "," + trackID2;

      let userTopSongs = {
        songs: [],
      };
      for (var i = 0; i < response.items.length; i++){
        userTopSongs.songs[i] = {
          songName: response.items[i].name,
          songID: response.items[i].id,
          artistName: [],
        };
        for (var j = 0; j < response.items[i].artists.length; j++){
          userTopSongs.songs[i].artistName.push(response.items[i].artists[j].name);
        }
      };
      console.log("userTopSongs",userTopSongs);


    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });

    // RecommendFxns.ajaxFxns(trackString,artistString);
    //this will need to be changed later
    // if length of array is less than 10(?), run this function and push to array and set state
  },
};

export default LoginMain;
