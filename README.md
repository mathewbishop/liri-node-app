# liri-node-app
A simple language interpretation and recognition interface.

This node app accepts 4 different types of commands:

1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says

The first three commands accept an arguemnt (a band name, song name, or movie title, respectively) and query an API for data about that item. 

The last command does not accept an argument, but rather queries spotify for data about the string contained in the random.txt file. It does this using the "fs" (file system) node package. 

Here are some image examples:

![App screenshot](images/Screen&#32;Shot&#32;2018-10-20&#32;at&#32;5.15.27&#32;PM.png)
![App screenshot](images/Screen&#32;Shot&#32;2018-10-20&#32;at&#32;5.21.38&#32;PM.png)
![App screenshot](images/Screen&#32;Shot&#32;2018-10-20&#32;at&#32;8.55.40&#32;PM.png)
![App screenshot](images/Screen&#32;Shot&#32;2018-10-20&#32;at&#32;9.00.16&#32;PM.png)