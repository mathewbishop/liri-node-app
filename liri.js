require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var moment = require("moment");
var request = require("request");
var Spotify = require("node-spotify-api");


var command = process.argv[2];
var arg = process.argv.slice(3).join(" ");


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


function bandsInTown(arg) {
    
    let queryURL = "https://rest.bandsintown.com/artists/" + arg + "/events?app_id=codingbootcamp";

    request(queryURL, function(error, response, body) {
        if (arg == null) {
            console.log("Please enter a band next time.");
        }
        
        if (!error && response.statusCode === 200) {
            console.log("Venue Name: " + JSON.parse(body)[0].venue.name);
            console.log("Venue Location: " + JSON.parse(body)[0].venue.city);

            let dateTime = JSON.parse(body)[0].datetime;
            console.log("Concert Date: " + moment(dateTime).format('MM/DD/YYYY'));   
        }
        if (error) {
            console.log("We're sorry, there was an error. Error # " + error);
            return;
        }
    })
}

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


function movie(arg) {
    let queryURL = "http://www.omdbapi.com/?t=" + arg + "&y=&plot=short&apikey=c3abf7c6"
        request(queryURL, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).Rated);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1]);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            }
        })

}


function random() {
    fs.readFile("random.txt", "utf-8", function(err, data) {
        if (err) {
            console.log("Error. Something didn't act right.");
        }
        spotify(data);
    })
}