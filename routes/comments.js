var router = require('express').Router();
var commentsController = require('../controllers/comments');
var songsController = require('../controllers/songs');


router.post('/songs/:id/comments', commentsController.create);
router.put('/songs/:id/comments/:id', commentsController.edit);



module.exports = router;
