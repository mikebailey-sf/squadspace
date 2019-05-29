var Song = require('../models/song');
var User = require('../models/user');
const LastFM = require('last-fm')
const lastfm = new LastFM(process.env.LASTFM_KEY, { userAgent: 'MyApp/1.0.0 (http://localhost:3000)' })
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.YOUTUBE_API_KEY);

module.exports = {
    index,
    show,
    new: newSong,
    create,
    delete: deleteSong,
    search
};

function index(req,res) {
    user = req.user;
    Song.find({}, function(err, songs) {
        res.render('songs/index', {
            title: 'all songs', 
            songs,
            user
        });
    });
}

function show(req,res) {
    var id = req.params.id;  
    Song.findById(id, function(err, song){
        lastfm.trackInfo({ name: song.title, artistName: song.artist, limit: 3 }, (err, data) => {
            lastfm.trackSimilar({ name: song.title, artistName: song.artist }, (err, similar) => {
                youtube.searchVideos(song.artist + song.title, 4)
                .then(results => {
                    var youtubeResult = results[0];
                    res.render('songs/show', {
                        title: 'show details', 
                        user: req.user, 
                        data, 
                        song, 
                        similar,
                        youtubeResult
                    });            
                }); 
            });
        });
    });
}

function newSong(req,res) {
    res.render('songs/new', {title: 'add song', user: req.user});
}

function create(req,res) {
    var song = new Song(req.body);
    req.user.songs.push(song.id);
    req.user.save();
    song.save(function(err){
        if (err) return res.render('songs/');
        res.redirect('songs/');
    });
}

function deleteSong(req, res) {
    Song.findOneAndDelete({_id: req.params.id}).exec();
    res.redirect('/songs');
}

function search(req, res){
    lastfm.trackSearch({ q: req.body.search, limit: 50 }, (err, data) => {
        var user = req.body.user;
        res.render('songs/results', {title: 'results', data, user});
      })    
}
