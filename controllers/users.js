const User = require('../models/user');
module.exports = {
    index
}

function index(req, res, next) {
    res.render('users/index', {
        users,
        title: 'welcome to oauth',
        user: req.user,
        name: req.query.name,
        sortKey
    });
}

