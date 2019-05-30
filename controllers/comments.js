var Song = require('../models/song');
var User = require('../models/user');
const LastFM = require('last-fm')
const lastfm = new LastFM(process.env.LASTFM_KEY, { userAgent: 'MyApp/1.0.0 (http://localhost:3000)' })
  

module.exports = {
    create,
    edit
};


function create(req,res) {
    Song.findById(req.params.id, function(err, song){
        song.comments.push({
            content: req.body.comment,
            user: user.name,
            userId: user.id
        });
        song.save();
        res.redirect('/songs/'+ req.params.id);
    });
}

function edit(req,res) {
    if (req.body.content) {
        Song.findById(req.body.songId)
        .then((song) => {
            var comment = song.comments.id(req.body.commentId);
            comment.content = req.body.content;
            song.save();
        })
        .then(function(){
            res.redirect(`/songs/${req.body.songId}`);
        });
    } else {
        Song.findById(req.body.songId)
        .then((song) => {
            song.comments.id(req.body.commentId).remove();
            song.save();
        })
        .then(function(){
            res.redirect(`/songs/${req.body.songId}`);
        });

    }
}