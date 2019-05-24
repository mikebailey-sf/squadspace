var router = require('express').Router();
var usersController = require('../controllers/users');

router.get('/', usersController.index);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
