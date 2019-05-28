var Song = require('../models/song');
var User = require('../models/user');
const LastFM = require('last-fm')
const lastfm = new LastFM('97963145409304edb5c0898d4add1479', { userAgent: 'MyApp/1.0.0 (http://localhost:3000)' })
  

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
    lastfm.trackSearch({ q: req.body.search }, (err, data) => {
        var user = req.body.user;
        if (err) console.error(err)
        else console.log(data)
        res.render('songs/results', {title: 'results', data, user});
      })    
}
