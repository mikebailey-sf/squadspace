var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songs');

router.get('/', songsController.index);
router.get('/new', songsController.new);
router.get('/:id', songsController.show);
router.post('/', songsController.create);

module.exports = router;
