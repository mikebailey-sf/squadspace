var router = require('express').Router();
var usersController = require('../controllers/users');

router.get('/', usersController.index);

router.get('/:id', usersController.show);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google', user);
}

module.exports = router;
