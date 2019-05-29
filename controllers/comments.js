var Song = require('../models/song');
var User = require('../models/user');
const LastFM = require('last-fm')
const lastfm = new LastFM(process.env.LASTFM_KEY, { userAgent: 'MyApp/1.0.0 (http://localhost:3000)' })
  

module.exports = {
    create
};


function create(req,res) {
    Song.findById(req.params.id, function(err, song){
        song.comments.push('test');
        res.redirect('/songs/'+ req.params.id);
    });
}