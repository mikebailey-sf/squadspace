var Song = require('../models/song');
var User = require('../models/user');

module.exports = {
    index,
    show,
    new: newSong,
    create
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
    
}

function newSong(req,res) {
    res.render('songs/new', {title: 'add song', user: req.user});
}

function create(req,res) {
    var song = new Song(req.body);
    req.user.songs.push(song.id);
    req.user.save();
    song.save(function(err){
        if (err) return res.render('songs/new');
        res.redirect('songs/new');
    });
}

