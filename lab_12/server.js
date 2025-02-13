var express = require('express');
    var app = express();
    var SpotifyWebApi = require('spotify-web-api-node');
    var spotifyApi = new SpotifyWebApi({
        clientId: '775933ee44ea453d833ed5e4b673a93e',
        clientSecret: '3e69a93744384d439d41b679b7d129ce'
    });
    app.use(express.static('public'))

    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            spotifyApi.setAccessToken(data.body['access_token']);
        },
        function (err){
            console.log('Something went wrong when retrieving an access token', err.message);
        }
    );

    app.get('/', function(req, res){
        res.send("Hello World! by express")
    });

    app.get('/searchLove', function (req, res){
        searchTracks('love', res);
    });

    app.get('/search', function (req, res) {
        var searchterm = req.query.searchterm;
        getTracks(searchterm,res);
    })

    async function getTracks(searchterm, res) {
        spotifyApi.searchTracks(searchterm).then(function (data){
            res.send(JSON.stringify(data.body));
        }, function (err) {
            console.error(err);
        });
    }

    function searchTracks(searchterm) {
    return spotifyApi.searchTracks(searchterm)
        .then(function (data) {
            var tracks = data.body.tracks.items;
            var HTMLResponse = "";
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                console.log(track.name);

                HTMLResponse = HTMLResponse +
                    "<div>" +
                        "<h2>" + track.name + "</h2>" +
                        "<h4>" + track.artists[0].name + "</h4>" +
                        "<img src='" + track.album.images[0].url + "'>" +
                    "</div>";
                console.log(HTMLResponse);
            }
            return HTMLResponse;
        })
        .catch(function (err) {
            console.error(err);
        });
}

app.listen(8080);