var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songs');

router.get('/', songsController.index);
router.get('/new', songsController.new);
router.get('/search', function(req,res){
    res.render('songs/search', {title: 'add song', user: req.user});
});
router.get('/:id', songsController.show);
router.post('/', songsController.create);
router.post('/search', songsController.search);
router.delete('/:id', songsController.delete);

module.exports = router;
