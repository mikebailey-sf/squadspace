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
        console.log(err);
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
    console.log(req.body.commentId);
    console.log(req.body.songId);
    Song.findById(req.body.songId, function(err,song){
        song.find({comment: req.body.commentId}, function(err,comment){
            comment.update(comment.id, req.body.content); 
        });
    });
}