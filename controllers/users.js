const User = require('../models/user');
const Song = require('../models/song');

module.exports = {
    index,
    show
};

function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
    res.render('users/index', {
        users,
        title: '',
        user: req.user,
        name: req.query.name,
        sortKey
        }); 
    });
}

function show(req, res, next){
    console.log(req.params.id);
    User.findById(req.params.id, function(err, user){
        Song.find({user: req.params.id}, function(err,songs) { 
            res.render('users/show', {
                user,
                songs,
                title: 'show user'
            });
        });    
    })
}