require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");


var command = process.argv[2];
var arg = process.argv[3];

// features/user input
    // concert-this
    // spotify-this-song
    // movie-this
    // do-what-it-says

    switch (command) {
        case "concert-this":
        bandsInTown(arg);
        break;

        case "spotify-this-song":
        spotify(arg);
        break;

        case "movie-this":
        movie(arg);
        break;

        case "do-what-it-says":
        random();
        break;
    };

// bands in town "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // need name, venue, date of event MM/DD/YYYY

function bandsInTown(arg) {
    let artist = arg;
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function(error, body, response) {
        if (arg == null) {
            console.log("Please enter an artist next time.");
        }
        
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
            // console.log("Name: " + JSON.parse(body).artistname);
        }
    })
}
 
// spotify     node spotify api https://www.npmjs.com/package/node-spotify-api
    // need artist, song name, preview link, album

function spotify(arg) {
    let spotify = new Spotify(keys.spotifyKeys);

    spotify.search({ type: "track", query: arg }, function(error, data) {
        if (error) {
            console.log("Error " + error);
            return;
        }

        let songInfo = data.tracks.items;
        console.log("Artist: " + songInfo[0].artists[0].name);
        console.log("Song: " + songInfo[0].name);
        console.log("Link " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name);
    })
}

// movie    OMDB    default to mr. nobody 
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.

// option 4   
    // random.txt
    // spotify for I Want it That Way