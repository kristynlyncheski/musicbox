import Test from './Test';

const RecommendFxns = {
  recommendAjax: function(){
    //these need to be parameters in fxn(tracks,artists)

    let tracks = "2ZyuwVvV6Z3XJaXIFbspeE,0H04yVa3DJxoXbLBpAb7iV"
    let artists = "1uNFoZAHBGtllmzznpCI3s,2kucQ9jQwuD8jWdtR9Ef38"

    //recommendation ajax
    $.ajax({
      url: "https://api.spotify.com/v1/recommendations?seed_tracks=" + tracks + "&seed_artists=" + artists + "&limit=20",
      headers: {
       'Authorization': 'Bearer ' + localStorage.accessToken
       },
    }).done(function(response){
      // console.log("response",response.tracks);

      var savedTracks = {
        tracks: [],
      };

      for (var i = 0; i < response.tracks.length; i++){
        let track = response.tracks[i];
        savedTracks.tracks[i] = {
          songTitle: track.name,
          songID: track.id,
          previewURL: track.preview_url,
          albumTitle: track.album.name,
          albumArt: track.album.images[0].url,
          artistName: [],
          artistID: [],
        };
        for (var j = 0; j < track.artists.length; j++){
          savedTracks.tracks[i].artistName.push(track.artists[j].name);
          savedTracks.tracks[i].artistID.push(track.artists[j].id);
        };
      };
      console.log("savedTracks",savedTracks);

      // set savedTracks into a state

      Test.testerFunction();

    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });

  },
};


export default RecommendFxns;
