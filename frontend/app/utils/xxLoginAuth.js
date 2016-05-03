import UserPrefs from '../utils/UserPrefs';

const LoginAuth = {
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
    // let stateParam = this.getParameter("state");
    // console.log("accessToken",accessToken);
    // console.log("expiresIn",expiresIn);
    // console.log("errorParam",errorParam);
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
          name: response.display_name,
          id: response.id,
          email: response.email,
          img: response.images[0].url
        };

        console.log("userInfo",userInfo);


        UserPrefs.ajaxFxns();


        //*** going to have to create a user record if needed to the database
        //*** otherwise have to find the matching account in my database using ID & email

        // window.location = stateParam;

      }).fail(function(response){
        console.log("it failed");
        console.log(response);
      });
    };
  },
};

export default LoginAuth;
