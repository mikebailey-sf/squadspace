var router = require('express').Router();
var passport = require('passport');
var songsController = require('../controllers/songs');

// The root route renders our only view
router.get('/', songsController.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/callback', passport.authenticate(
  'google',
  {
    successRedirect : '/songs',
    failureRedirect : '/songs'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;