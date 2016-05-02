const LoginMain = {
  getAccessToken: function(){
    if (!localStorage.accessToken || localStorage.expireTime < Date()) {
      var currentPage = window.location.href;
      // window.location = "https://accounts.spotify.com/authorize?client_id=f37d4487a49943719574f8363adb279e&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F%23%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=" + encodeURIComponent(currentPage);
      // window.location = "https://accounts.spotify.com/authorize?client_id=f37d4487a49943719574f8363adb279e&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback.html&scope=user-read-private%20user-read-email&response_type=token&state=" + encodeURIComponent(currentPage);
      window.location = "https://accounts.spotify.com/authorize?client_id=f37d4487a49943719574f8363adb279e&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=" + encodeURIComponent(currentPage);

    } else {
      console.log("got access token from local storage");
      return localStorage.accessToken;
    }
  }
};

export default LoginMain;
