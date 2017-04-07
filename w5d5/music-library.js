let Library = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playLists = [];
}

Library.prototype.getLibrary = function () {
  return ({
    name: this.name,
    creator: this.creator,
    playlists: this.playLists
  });
}

Library.prototype.addPlaylists = function(playlists) {
  for (playlist of playlists){
    this.playLists.push(playlist);
  }
}

let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.getPlaylist = function(){
  return ({
    name: this.name,
    tracks: this.tracks
  })
}

Playlist.prototype.addTracks = function(tracks){
  for (track of tracks){
    this.tracks.push(track);
  }
}

Playlist.prototype.overallRating = function() {
  let sum = this.tracks.reduce((sum, track) => sum + track.rating, 0)
  console.log("Overall Rating : " , Math.round(sum/this.tracks.length));
}

Playlist.prototype.totalDuration = function() {
  let sum = this.tracks.reduce((sum, track) => sum + track.length, 0)
  console.log(`Total Duration : ${sum} mins`);
}

let Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Track.prototype.getTrack = function(){
  return ({
    title: this.title,
    rating: this.rating,
    length: this.length
  });
}

let T1 = new Track("Track 1", 5, 5);
let T2 = new Track("Track 2", 5, 6);
let T3 = new Track("Track 3", 4, 7);
//console.log(.getTrack());

let P1 = new Playlist("Playlist 1");
P1.addTracks([T1])
P1.overallRating();
P1.totalDuration();

let P2 = new Playlist("Playlist 2");
P2.addTracks([T2, T3]);
P2.overallRating();
P2.totalDuration();

console.log("Display Playlist P1", P1.getPlaylist());

let myLibrary = new Library("My Library","Abhi");
myLibrary.addPlaylists([P1, P2]);
console.log("Display MyLibrary: " , myLibrary.getLibrary());








