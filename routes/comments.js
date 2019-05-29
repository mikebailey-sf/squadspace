var router = require('express').Router();
var commentsController = require('../controllers/comments');
var songsController = require('../controllers/songs');


router.post('/songs/:id/comments', commentsController.create);



module.exports = router;
