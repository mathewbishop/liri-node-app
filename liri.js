require("dotenv").config();

var key = require("./keys.js");
var fs = require("fs");
var request = require("request");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var arg = process.argv[3];

// features/user input
    // concert-this
    // spotify-this-song
    // movie-this
    // do-what-it-says

// bands in town "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // need name, venue, date of event MM/DD/YYYY
 
// spotify     node spotify api https://www.npmjs.com/package/node-spotify-api
    // need artist, song name, preview link, album

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